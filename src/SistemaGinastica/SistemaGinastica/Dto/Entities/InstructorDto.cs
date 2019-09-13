using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class InstructorDto : PersonDataModelDto
    {
        public bool authorizedMuscle { get; set; }
        public bool authorizedGroupClass { get; set; }

        public InstructorDto() { }

        public InstructorDto(Instructor model) : base(model)
        {
            authorizedMuscle = model.AuthorizedMuscle;
            authorizedGroupClass = model.AuthorizedGroupClass;
        }
    }
}
