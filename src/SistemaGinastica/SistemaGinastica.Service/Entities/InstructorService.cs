using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class InstructorService : BaseModelService<Instructor, InstructorDataAccess>
    {
        public InstructorService(InstructorDataAccess da) : base(da) { }
    }
}
