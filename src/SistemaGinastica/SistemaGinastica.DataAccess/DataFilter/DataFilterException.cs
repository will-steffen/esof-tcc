using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace SistemaGinastica.DataAccess.DataFilter
{
    [Serializable]
    public class DataFilterException : Exception
    {
        public DataFilterException() { }
        public DataFilterException(string message) : base(message) { }
        public DataFilterException(string message, Exception innerException) : base(message, innerException) { }
        protected DataFilterException(SerializationInfo info, StreamingContext context) : base(info, context) { }
    }
}
