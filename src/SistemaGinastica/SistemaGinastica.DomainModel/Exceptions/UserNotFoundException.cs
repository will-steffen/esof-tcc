
namespace SistemaGinastica.DomainModel.Exceptions
{
    public class UserNotFoundException : SgException
    {
        public UserNotFoundException() { }
        public UserNotFoundException(string msg) : base(msg) { }
    }
}
