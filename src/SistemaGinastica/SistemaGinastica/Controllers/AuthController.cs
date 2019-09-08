using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.DomainModel.Utils;
using SistemaGinastica.Dto.Request;
using SistemaGinastica.Service.Entities;

namespace SistemaGinastica.Controllers
{
    public class AuthController : BaseController
    {
        private UserService userService;

        public AuthController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("ok")]
        public ActionResult<string> OkString()
        {
            return Ok("Ok");
        }

        [HttpGet]
        [Authorize]
        public ActionResult<DateTimeOffset> ServerDate()
        {
            return Ok(DateUtils.OffsetNow());
        }

        [HttpPost]
        public ActionResult<LoginResponseDto> Post([FromBody] LoginRequestDto dto)
        {
            try
            {
                return new LoginResponseDto()
                {
                    token = userService.Authenticate(dto.username, dto.password)
                };
            }
            catch (SgException e)
            {
                e.Ship();
                return Unauthorized();
            }           
        }
    }
}
