using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
    public class UserController : BaseController
    {
        private UserService userService;

        public UserController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        [Authorize]
        public ActionResult<UserDto> Info()
        {
            User user = userService.GetById(ApplicationEnv.GetUserIdentification().Id);
            return Ok(new UserDto(user));
        }
    }
}
