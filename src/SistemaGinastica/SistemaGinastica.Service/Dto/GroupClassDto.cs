using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.Service.Dto
{
    public class GroupClassDto : BaseModelDto
    {
        public DateTime initHour { get; set; }
        public DateTime endHour { get; set; }
        public string room { get; set; }
        public string name { get; set; }
        public long? idInstructor { get; set; }
        public InstructorDto instructor { get; set; }
        public List<WeekDay> weekDayList { get; set; } = new List<WeekDay>();

        public GroupClassDto() { }

        public GroupClassDto(GroupClass model) : base(model)
        {
            initHour = model.InitHour;
            endHour = model.EndHour;
            room = model.Room;
            name = model.Name;
            idInstructor = model.IdInstructor;
            if (model.Instructor != null) instructor = new InstructorDto(model.Instructor);
            if (model.WeekDayList != null) weekDayList = model.WeekDayList.Select(x => x.WeekDay).ToList();
        }
    }
}
