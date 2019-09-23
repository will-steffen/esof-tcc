using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class CustomerService : BaseCrudDtoService<Customer, CustomerDataAccess, CustomerDto>
    {
        public CustomerService(CustomerDataAccess da) : base(da) { }

        protected override Customer Map(Customer model, CustomerDto dto)
        {
            model.Name = dto.name;
            model.Cpf = dto.cpf;
            model.Rg = dto.rg;
            model.Address = dto.address;
            model.BirthDate = dto.birthDate;
            model.PlanType = dto.planType;
            model.Registration = dto.registration;
            return base.Map(model, dto);
        }
    }
}
