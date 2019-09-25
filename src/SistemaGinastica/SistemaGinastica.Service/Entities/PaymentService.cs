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
        public PaymentService(PaymentDataAccess da) : base(da) { }

        public Payment GenerateFirstPayment(Customer customer)
        {
            Payment payment = new Payment
            {
                ExpectedDate = DateTime.Now.AddDays(2),
                Customer = customer,
                Value = customer.PlanValue
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
                Customer = customer,
                Value = customer.PlanValue
            };
            Save(nextPayment);
        }
    }
}
