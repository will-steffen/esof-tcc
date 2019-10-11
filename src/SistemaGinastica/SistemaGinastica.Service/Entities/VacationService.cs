using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class VacationService : BaseModelService<Vacation, VacationDataAccess>
    {
        public VacationService(VacationDataAccess da) : base(da) { }
    }
}
