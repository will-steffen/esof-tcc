using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class GroupClassService : BaseCrudDtoService<GroupClass, GroupClassDataAccess, GroupClassDto>
    {
        public GroupClassService(GroupClassDataAccess da) : base(da) { }

        protected override GroupClass Map(GroupClass model, GroupClassDto dto)
        {
            model.InitHour = dto.initHour;
            model.EndHour = dto.endHour;
            model.Room = dto.room;
            model.IdInstructor = dto.idInstructor;
            return base.Map(model, dto);
        }
    }
}
