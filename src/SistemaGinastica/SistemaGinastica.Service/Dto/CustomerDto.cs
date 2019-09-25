using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.Service.Dto
{
    public class CustomerDto : PersonDataModelDto
    {
        public string address { get; set; }
        public DateTime birthDate { get; set; }
        public PlanType planType { get; set; }
        public string registration { get; set; }
        public float planValue { get; set; }
        public virtual List<PaymentDto> paymentList { get; set; }

        public CustomerDto() { }

        public CustomerDto(Customer model) : base(model)
        {
            address = model.Address;
            birthDate = model.BirthDate;
            planType = model.PlanType;
            registration = model.Registration;
            planValue = model.PlanValue;
            if (model.PaymentList != null) paymentList = model.PaymentList.Select(x => new PaymentDto(x)).ToList();
        }
    }
}
