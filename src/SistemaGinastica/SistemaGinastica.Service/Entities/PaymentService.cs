using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class PaymentService : BaseModelService<Payment, PaymentDataAccess>
    {
        private VacationService vacationService;

        public PaymentService(PaymentDataAccess da, VacationService vacationService) : base(da)
        {
            this.vacationService = vacationService;
        }

        public Payment GenerateFirstPayment(Customer customer)
        {
            Payment payment = new Payment
            {
                ExpectedDate = DateTime.Now.AddDays(2),
                Customer = customer,
                Value = customer.PlanValue,
                PeriodStartDate = DateTime.Now,
                PeriodEndDate = customer.PlanType == PlanType.Annually
                    ? DateTime.Now.AddYears(1)
                    : DateTime.Now.AddMonths(1)
            };
            Save(payment);
            return payment;
        }

        public void RegisterPayment(Customer customer, PaymentDto paymentData)
        {
            Payment payment = customer.PaymentList.FirstOrDefault(x => x.PaymentDate == null);
            payment.PaymentDate = DateTimeOffset.Now;            
            payment.Value = paymentData.value;
            Save(payment);

            Payment nextPayment = new Payment
            {
                ExpectedDate = customer.PlanType == PlanType.Annually 
                    ? payment.ExpectedDate.AddYears(1) 
                    : payment.ExpectedDate.AddMonths(1),
                PeriodStartDate = customer.PlanType == PlanType.Annually
                    ? payment.PeriodStartDate.AddYears(1)
                    : payment.PeriodStartDate.AddMonths(1),
                PeriodEndDate = customer.PlanType == PlanType.Annually
                    ? payment.PeriodStartDate.AddYears(2)
                    : payment.PeriodStartDate.AddMonths(2),
                Customer = customer,
                Value = customer.PlanValue
            };
            Save(nextPayment);
        }

        //public Payment RegisterVacation(VacationDto vacation)
        //{
        //    paymentService.RegisterPayment(FindById(payment.idCustomer), payment);
        //    return FindById(vacation.id);
        //}
    }
}
