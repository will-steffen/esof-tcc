using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DataAccess.DataFilter;
using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.Service.Dto;
using SistemaGinastica.Service.Entities;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.Controllers
{
    public class UserController : BaseCrudDtoController<User, UserService, UserDataAccess, UserDto>
    {       
        public UserController(UserService userService) : base(userService)
        {
            fieldFilterMap = new Dictionary<string, string>
            {
                {"Username", "Username"},
                {"Type", "Type"},
                {"Name", "Name"},
                {"RG", "Rg"},
                {"CPF", "Cpf"},
            };
        }

        [HttpGet]
        [Authorize]
        public ActionResult<UserDto> Info()
        {
            User user = Service.GetById(ApplicationEnv.GetUserIdentification().Id);
            return Ok(new UserDto(user));
        }
    }
}
