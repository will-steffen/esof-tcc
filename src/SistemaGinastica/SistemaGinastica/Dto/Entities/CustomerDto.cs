using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class CustomerDto : PersonDataModelDto
    {
        public string address { get; set; }
        public DateTime birthDate { get; set; }
        public bool annualPlan { get; set; }
        public string registration { get; set; }

        public CustomerDto() { }

        public CustomerDto(Customer model) : base(model)
        {
            address = model.Address;
            birthDate = model.BirthDate;
            annualPlan = model.AnnualPlan;
            registration = model.Registration;
        }
    }
}
