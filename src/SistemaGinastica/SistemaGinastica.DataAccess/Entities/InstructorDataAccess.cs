using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class InstructorDataAccess : BaseDataAccess<Instructor>
    {
        public InstructorDataAccess(ApplicationContext ctx) : base(ctx) { }

        public IEnumerable<Instructor> ListGroupClass()
        {
            return GetBaseQueryable().Where(x => x.AuthorizedGroupClass);
        }
    }
}
