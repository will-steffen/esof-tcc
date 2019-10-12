using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.Service.Dto;
using System;

namespace SistemaGinastica.Service.Entities
{
    public class VacationService : BaseModelService<Vacation, VacationDataAccess>
    {
        public VacationService(VacationDataAccess da) : base(da) { }
    }
}
