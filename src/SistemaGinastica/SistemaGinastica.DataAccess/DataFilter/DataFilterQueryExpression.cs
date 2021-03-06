﻿using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public class DataFilterQueryExpression<TModel>  where TModel : BaseModel
    {
        public string Field { get; set; }
        public Expression<Func<TModel, bool>> Expression { get; set; }
     
    }
}
