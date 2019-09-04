
namespace SistemaGinastica.DomainModel.Exceptions
{
    public class NotUniqueException : SgException
    {
        public NotUniqueException() { }
        public NotUniqueException(string msg) : base(msg) { }
    }   
}
