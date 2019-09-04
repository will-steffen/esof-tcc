using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class PresenceService : BaseModelService<Presence, PresenceDataAccess>
    {
        public PresenceService(PresenceDataAccess da) : base(da) { }
    }
}
