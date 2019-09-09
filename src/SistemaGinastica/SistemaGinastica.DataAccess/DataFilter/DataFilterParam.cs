using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public class DataFilterParam
    {
        public FilterType Type { get; set; }
        public string Field { get; set; }
        public object Argument { get; set; }

        public DataFilterParam() { }
        public DataFilterParam(string field, FilterType type, object argument = null)
        {
            Field = field;
            Type = type;
            Argument = argument;     
        }
    }
}
