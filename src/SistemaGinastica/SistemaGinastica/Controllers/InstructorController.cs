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
    public class InstructorController : BaseCrudDtoController<Instructor, InstructorService, InstructorDataAccess, InstructorDto>
    {
        public InstructorController(InstructorService service) : base(service)
        {
            fieldFilterMap = new Dictionary<string, string>
            {
                {"AuthorizedMuscle", "AuthorizedMuscle"},
                {"AuthorizedGroupClass", "AuthorizedGroupClass"},
                {"Name", "Name"},
                {"RG", "Rg"},
                {"CPF", "Cpf"},
                {"Active", "Active"},
            };
        }

        [HttpGet("groupclass")]
        [Authorize]
        public virtual ActionResult<IEnumerable<InstructorDto>> ListGroupClass()
        {
            return Ok(Service.ListGroupClass().Select(x => GetDto(x)));
        }
    }
}
