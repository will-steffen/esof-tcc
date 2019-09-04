
namespace SistemaGinastica.DomainModel.Exceptions
{
    public class InvalidCredentialsException : SgException
    {
        public InvalidCredentialsException() { }
        public InvalidCredentialsException(string msg) : base(msg) { }
    }
}
