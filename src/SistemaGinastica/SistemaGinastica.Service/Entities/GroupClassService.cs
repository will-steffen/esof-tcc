using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class GroupClassService : BaseModelService<GroupClass, GroupClassDataAccess>
    {
        public GroupClassService(GroupClassDataAccess da) : base(da) { }
    }
}
