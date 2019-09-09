using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class InstructorDto : PersonDataModelDto
    {
        public InstructorDto() { }

        public InstructorDto(Instructor model) : base(model)
        {
        }
    }
}
