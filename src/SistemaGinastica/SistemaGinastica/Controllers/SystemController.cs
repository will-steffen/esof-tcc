using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DomainModel.Utils;
using SistemaGinastica.Dto;
using SistemaGinastica.Service.Entities;
using System;

namespace SistemaGinastica.Controllers
{
    public class SystemController : BaseController
    {
        private MockService mockService;
        public SystemController(MockService mockService)
        {
            this.mockService = mockService;
        }

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
                daysToAddOnNow = DateUtils.DaysToAddOnNow,
                mocked = mockService.MockAreadyRun()
            });
        }

        [HttpGet("mock")]
        [Authorize]
        public ActionResult<string> Mock()
        {
            return Ok(new { result = mockService.Mock() });
        }
    }
}
