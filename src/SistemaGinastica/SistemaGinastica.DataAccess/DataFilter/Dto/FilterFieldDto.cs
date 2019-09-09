using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public class FilterFieldDto
    {
        public FilterType type { get; set; }
        public string field { get; set; }
        public object argument { get; set; }
    }
}
