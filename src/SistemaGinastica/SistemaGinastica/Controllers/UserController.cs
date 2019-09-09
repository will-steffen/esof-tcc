﻿using Microsoft.AspNetCore.Authorization;
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

        [HttpPost("filter")]
        [Authorize]
        public ActionResult<FilterDto> Filter([FromBody] FilterDto filterDTO)
        {
            var fieldMap = new Dictionary<string, string>
            {
                {"Username", "Username"}
            };

            var filter = filterDTO.GetDataFilterBase<User>(fieldMap);
            filter.SetOrderBy(filterDTO.orderByField, fieldMap);

            filter = userService.ListByFilter(filter);
            filterDTO.data = filter.Data.Select(x => new UserDto(x)).ToList();
            filterDTO.totalResults = filter.TotalCount;

            return Ok(filterDTO);
        }
    }
}
