using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class VacationDataAccess : BaseDataAccess<Vacation>
    {
        public VacationDataAccess(ApplicationContext ctx) : base(ctx) { }
    }
}
