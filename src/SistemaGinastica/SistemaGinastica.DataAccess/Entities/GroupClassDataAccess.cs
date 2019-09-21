using Microsoft.EntityFrameworkCore;
using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class GroupClassDataAccess : BaseDataAccess<GroupClass>
    {
        public GroupClassDataAccess(ApplicationContext ctx) : base(ctx) { }

        public override IQueryable<GroupClass> GetBaseQueryable()
        {
            return Set().Include(x => x.Instructor);
        }
    }
}
