using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DataAccess.DataFilter;
using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.Dto.Entities;
using SistemaGinastica.Service.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Controllers
{
    public class InstructorController : BaseController
    {
        private InstructorService instructorService;

        public InstructorController(InstructorService instructorService)
        {
            this.instructorService = instructorService;
        }
  

        [HttpPost("filter")]
        [Authorize]
        public ActionResult<FilterDto> Filter([FromBody] FilterDto filterDTO)
        {
            var fieldMap = new Dictionary<string, string>
            {
            };

            var filter = filterDTO.GetDataFilterBase<Instructor>(fieldMap);
            filter.SetOrderBy(filterDTO.orderByField, fieldMap);

            filter = instructorService.ListByFilter(filter);
            filterDTO.data = filter.Data.Select(x => new InstructorDto(x)).ToList();
            filterDTO.totalResults = filter.TotalCount;

            return Ok(filterDTO);
        }
    }
}
