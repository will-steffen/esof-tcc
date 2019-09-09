using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public class DataFilterOrderExpression<TModel> where TModel : BaseModel
    {
        public string OrderByField { get; set; }
        public string OrderByDirection { get; set; }
        public Expression<Func<TModel, Object>> Expression { get; set; }
     
    }
}
