using SistemaGinastica.DomainModel.Entities;
using System;

namespace SistemaGinastica.Service.Dto
{
    public class GroupClassDto : BaseModelDto
    {
        public DateTime initHour { get; set; }
        public DateTime endHour { get; set; }
        public string room { get; set; }
        public string name { get; set; }
        public long idInstructor { get; set; }
        public InstructorDto instructor { get; set; }

        public GroupClassDto() { }

        public GroupClassDto(GroupClass model) : base(model)
        {
            initHour = model.InitHour;
            endHour = model.EndHour;
            room = model.Room;
            name = model.Name;
            idInstructor = model.IdInstructor;
            if (model.Instructor != null) instructor = new InstructorDto(model.Instructor);
        }
    }
}
