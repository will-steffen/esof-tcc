﻿using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.DomainModel.Utils;
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
        private static int paymentDaysSpan = 2;

        public PaymentService(PaymentDataAccess da, VacationService vacationService) : base(da)
        {
            this.vacationService = vacationService;
        }

        public Payment GenerateFirstPayment(Customer customer)
        {
            DateTime startUse = customer.StartMockUse ?? DateUtils.Now();
            Payment payment = new Payment
            {
                ExpectedDate = startUse.AddDays(paymentDaysSpan),
                Customer = customer,
                Value = customer.PlanValue,
                PeriodStartDate = startUse,
                PeriodEndDate = customer.PlanType == PlanType.Annually
                    ? startUse.AddYears(1)
                    : startUse.AddMonths(1)
            };
            Save(payment);
            return payment;
        }

        public void RegisterPayment(Customer customer, PaymentDto paymentData)
        {
            Payment payment = customer.PaymentList.FirstOrDefault(x => x.PaymentDate == null);
            payment.PaymentDate = paymentData.paymentDate;
            payment.Value = paymentData.value;
            Save(payment);

            Payment nextPayment = new Payment
            {
                PeriodStartDate = payment.PeriodEndDate.AddDays(1),
                Customer = customer,
                Value = customer.PlanValue
            };
            nextPayment.ExpectedDate = nextPayment.PeriodStartDate.AddDays(paymentDaysSpan);
            nextPayment.PeriodEndDate = customer.PlanType == PlanType.Annually
                    ? nextPayment.PeriodStartDate.AddYears(1)
                    : nextPayment.PeriodStartDate.AddMonths(1);
            
            Save(nextPayment);
        }

        public Tuple<Payment, int> RegisterVacation(VacationDto vacationData)
        {
            Payment payment = FindById(vacationData.idPayment);

            if (payment.VacationList.Count >= 3)
            {
                throw new SgException("VacationLimit");
            }
            Vacation vacation = new Vacation
            {
                Payment = payment,
                InitDate = vacationData.initDate,
                EndDate = vacationData.endDate,
            };      
            payment.VacationList.Add(vacation);
            if(payment.GetVacationDays() > 30)
            {
                throw new SgException("VacationDaysLimit");
            }           
            Save(payment);
            return Tuple.Create(payment, vacation.GetDuration().Days);
        }

        public int CountLatePayments()
        {
            return DataAccess.CountLatePayments();
        }
    }
}
