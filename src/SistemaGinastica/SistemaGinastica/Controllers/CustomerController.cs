using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DataAccess.DataFilter;
using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.Dto;
using SistemaGinastica.Service.Dto;
using SistemaGinastica.Service.Entities;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.Controllers
{
    public class CustomerController : BaseCrudDtoController<Customer, CustomerService, CustomerDataAccess, CustomerDto>
    {
        PaymentService paymentService;

        public CustomerController(CustomerService service, PaymentService paymentService) : base(service)
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
                {"Active", "Active"},
            };
            this.paymentService = paymentService;
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

        [HttpPost("vacation")]
        [Authorize]
        public ActionResult<CustomerDto> RegisterVacation([FromBody] VacationDto vacation)
        {
            try
            {
                return Ok(GetDto(Service.RegisterVacation(vacation)));
            }
            catch (SgException e)
            {
                return HandleError(e);
            }
        }

        [HttpGet("home-data")]
        [Authorize]
        public ActionResult<HomeDataResponseDto> GetHomeData()
        {
            try
            {
                var data = new HomeDataResponseDto
                {
                    countCustomer = Service.CountActiveCustumers(),
                    countLatePayment = paymentService.CountLatePayments()
                };
                return Ok(data);
            }
            catch (SgException e)
            {
                return HandleError(e);
            }
        }        
    }
}
