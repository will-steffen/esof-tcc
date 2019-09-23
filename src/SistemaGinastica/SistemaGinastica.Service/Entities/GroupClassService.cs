using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.Service.Dto;
using System.Collections.Generic;
using System.Linq;

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
            model.Name = dto.name;
            model.IdInstructor = dto.idInstructor;
            model.WeekDayList = dto.weekDayList.Select(x => new GroupClassWeekDay { WeekDay = x }).ToList();
            return base.Map(model, dto);
        }

        public void OnDeleteInstructor(long idInstructor)
        {
            List<GroupClass> instructorClassList = DataAccess.GetByIdIndtructor(idInstructor);
            instructorClassList.ForEach(groupClass => {
                groupClass.IdInstructor = null;
                Save(groupClass);
            });
        }
    }
}
