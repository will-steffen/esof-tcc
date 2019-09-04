using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class PresenceDataAccess : BaseDataAccess<Presence>
    {
        public PresenceDataAccess(ApplicationContext ctx) : base(ctx) { }
    }
}
