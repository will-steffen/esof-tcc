using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DataAccess.DataFilter;
using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Exceptions;
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
                {"PlanType", "PlanType"},
                {"Registration", "Registration"},
                {"Name", "Name"},
                {"RG", "Rg"},
                {"CPF", "Cpf"},
            };
        }

        [HttpPost("payment")]
        [Authorize]
        public ActionResult<CustomerDto> RegisterPayment([FromBody] PaymentDto payment)
        {
            try
            {
                return Ok(GetDto(Service.RegisterPayment(payment)));
            }
            catch (SgException e)
            {
                return HandleError(e);
            }
        }
    }
}
