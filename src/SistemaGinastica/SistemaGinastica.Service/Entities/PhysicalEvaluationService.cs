using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class PhysicalEvaluationService : BaseModelService<PhysicalEvaluation, PhysicalEvaluationDataAccess>
    {
        public PhysicalEvaluationService(PhysicalEvaluationDataAccess da) : base(da) { }
    }
}
