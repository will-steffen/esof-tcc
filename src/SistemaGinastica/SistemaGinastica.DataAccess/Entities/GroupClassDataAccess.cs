using Microsoft.EntityFrameworkCore;
using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.DataAccess.Entities
{
    public class GroupClassDataAccess : BaseDataAccess<GroupClass>
    {
        public GroupClassDataAccess(ApplicationContext ctx) : base(ctx) { }

        public override IQueryable<GroupClass> GetBaseQueryable()
        {
            return Set()
                .Include(x => x.Instructor)
                .Include(x => x.WeekDayList);
        }

        public List<GroupClass> GetByIdIndtructor(long idInstructor)
        {
            return Set().Where(x => x.IdInstructor == idInstructor).ToList();
        }
    }
}
