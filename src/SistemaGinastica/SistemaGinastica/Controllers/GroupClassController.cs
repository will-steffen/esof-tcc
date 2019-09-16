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
    public class GroupClassController : BaseCrudDtoController<GroupClass, GroupClassService, GroupClassDataAccess, GroupClassDto>
    {
        public GroupClassController(GroupClassService service) : base(service)
        {
            fieldFilterMap = new Dictionary<string, string>
            {
                {"InitHour", "InitHour"},
                {"EndHour", "EndHour"},
                {"Room", "Room"},
                {"Instructor", "IdInstructor"},
            };
            fieldFilterMapOrder = fieldFilterMap;
            fieldFilterMapOrder["Instructor"] = "Instructor.Name";
        }  
    }
}
