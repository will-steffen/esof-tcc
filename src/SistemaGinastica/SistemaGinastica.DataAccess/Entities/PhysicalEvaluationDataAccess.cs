using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class PhysicalEvaluationDataAccess : BaseDataAccess<PhysicalEvaluation>
    {
        public PhysicalEvaluationDataAccess(ApplicationContext ctx) : base(ctx) { }
    }
}
