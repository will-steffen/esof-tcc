using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DomainModel.Utils;
using SistemaGinastica.Dto;
using System;

namespace SistemaGinastica.Controllers
{
    public class SystemController : BaseController
    {
        [HttpPost]
        [Authorize]
        public ActionResult SetSystemDate([FromBody] SystemConfigRequestDto dto)
        {
            DateUtils.DaysToAddOnNow = dto.systemDate.Subtract(DateTime.Now).Days;
            return Ok();
        }

        [HttpGet]
        [Authorize]
        public ActionResult<SystemConfigRequestDto> GetSystemDate()
        {
            return Ok(new SystemConfigResponseDto
            {
                daysToAddOnNow = DateUtils.DaysToAddOnNow
            });
        }
    }
}
