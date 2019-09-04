using System;

namespace SistemaGinastica.DomainModel.Exceptions
{
    public class SgException : Exception
    {
        public SgException() { }
        public SgException(string msg): base(msg) { }
        public void Ship() { }
    }
}
