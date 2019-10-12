using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
namespace SistemaGinastica.DataAccess.Entities
{
    public class PresenceDataAccess : BaseDataAccess<Presence>
    {
        public PresenceDataAccess(ApplicationContext ctx) : base(ctx) { }
        
    }
}
