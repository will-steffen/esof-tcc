using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DataAccess.DataFilter;
using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.Service.Dto;
using SistemaGinastica.Service.Entities;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.Controllers
{
    public class CustomerController : BaseCrudDtoController<Customer, CustomerService, CustomerDataAccess, CustomerDto>
    {
        public CustomerController(CustomerService service) : base(service)
        {
            fieldFilterMap = new Dictionary<string, string>
            {
                {"Address", "Address"},
                {"BirthDate", "BirthDate"},
                {"AnnualPlan", "AnnualPlan"},
                {"Registration", "Registration"},
                {"Name", "Name"},
                {"RG", "Rg"},
                {"CPF", "Cpf"},
            };
        } 
    }
}
