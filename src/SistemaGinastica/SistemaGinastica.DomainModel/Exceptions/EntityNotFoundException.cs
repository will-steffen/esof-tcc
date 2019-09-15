
namespace SistemaGinastica.DomainModel.Exceptions
{
    public class EntityNotFoundException : SgException
    {
        public EntityNotFoundException() { }
        public EntityNotFoundException(string msg) : base(msg) { }
    }
}
