using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public class DataFilter<TModel> where TModel : BaseModel
    {
        public int PageSize { get; set; } = 10;
        public bool Paginated { get; set; } = true;
        public int Page { get; set; } = 1;
        public int TotalCount { get; set; } = 0;
        public string OrderByField { get; set; } = "Id";
        public string OrderByDirection { get; set; } = "ASC";
        public DataFilterGroup ParamGroup { get; set; } = new DataFilterGroup();
        public IEnumerable<TModel> Data { get; set; }

        /// <summary>
        /// Lista de Expressões customizadas a serem aplicadas quando o filtro possuir parâmetros para campos específicos
        /// </summary>
        public List<DataFilterOrderExpression<TModel>> CustomOrderExpressionList { get; set; } = new List<DataFilterOrderExpression<TModel>>();

        /// <summary>
        /// Expressão customizada para ser usada indepedente dos campos do filtro (será usada sempre)
        /// </summary>
        public Expression<Func<TModel, bool>> CustomQueryExpression { get; set; }

        /// <summary>
        /// Expressão customizada de ordenação a ser aplicada para um campo específico. Expressão com parâmetro dinâmico.
        /// </summary>
        public List<DataFilterQueryExpressionWithArgument<TModel>> CustomQueryExpressionWithArgumentList { get; set; } = new List<DataFilterQueryExpressionWithArgument<TModel>>();

        /// <summary>
        /// Expressão customizada de ordenação a ser aplicada para um campo específico. Expressão sem parâmetro dinâmico.
        /// </summary>
        public List<DataFilterQueryExpression<TModel>> CustomQueryExpressionList { get; set; } = new List<DataFilterQueryExpression<TModel>>();

        public DataFilter<TModel> AddParam(DataFilterParam param)
        {           
            ParamGroup.AddParam(param);
            return this;
        }

        public DataFilter<TModel> AddParam(string field, FilterType type, object argument = null)
        {
            AddParam(new DataFilterParam(field, type, argument));
            return this;
        }

        public DataFilter<TModel> SetType(FilterGroupType type)
        {
            ParamGroup.Type = type;
            return this;
        }

        public DataFilter<TModel> AddGroup(DataFilterGroup group)
        {
            ParamGroup.AddGroup(group);
            return this;
        }

        public DataFilter<TModel> SetOrderBy(string filterDtoOrderBy, Dictionary<string, string> fieldMap)
        {
            if (filterDtoOrderBy!= null && fieldMap.ContainsKey(filterDtoOrderBy))
            {
                OrderByField = fieldMap[filterDtoOrderBy];
            }
            return this;
        }
   
        public DataFilter<TModel> AddCustomOrderExpression(string orderByField, string orderByDirection, Expression<Func<TModel, Object>> expression)
        {
            DataFilterOrderExpression<TModel> expr = new DataFilterOrderExpression<TModel>
            {
                OrderByField = orderByField,
                OrderByDirection = orderByDirection,
                Expression = expression
            };
            CustomOrderExpressionList.Add(expr);
            return this;
        }

        public DataFilter<TModel> AddCustomOrderExpression(string orderByField, Expression<Func<TModel, Object>> expressionASC, Expression<Func<TModel, Object>> expressionDESC)
        {
            DataFilterOrderExpression<TModel> exprASC = new DataFilterOrderExpression<TModel>
            {
                OrderByField = orderByField,
                OrderByDirection = "ASC",
                Expression = expressionASC
            };
            DataFilterOrderExpression<TModel> exprDESC = new DataFilterOrderExpression<TModel>
            {
                OrderByField = orderByField,
                OrderByDirection = "DESC",
                Expression = expressionDESC
            };
            CustomOrderExpressionList.Add(exprASC);
            CustomOrderExpressionList.Add(exprDESC);
            return this;
        }
        public DataFilter<TModel> AddCustomOrderExpression(string orderByField, Expression<Func<TModel, Object>> expression)
        {
            DataFilterOrderExpression<TModel> exprASC = new DataFilterOrderExpression<TModel>
            {
                OrderByField = orderByField,
                OrderByDirection = "ASC",
                Expression = expression
            };
            DataFilterOrderExpression<TModel> exprDESC = new DataFilterOrderExpression<TModel>
            {
                OrderByField = orderByField,
                OrderByDirection = "DESC",
                Expression = expression
            };
            CustomOrderExpressionList.Add(exprASC);
            CustomOrderExpressionList.Add(exprDESC);
            return this;
        }

        public DataFilter<TModel> AddCustomQueryExpression(Expression<Func<TModel, bool>> expression)
        {
            CustomQueryExpression = expression;
            return this;
        }

        public DataFilter<TModel> AddCustomQueryExpression(string field, Expression<Func<TModel, Object, bool>> expression)
        {
            DataFilterQueryExpressionWithArgument<TModel> expr = new DataFilterQueryExpressionWithArgument<TModel>
            {
                Field = field,
                Expression = expression
            };
            CustomQueryExpressionWithArgumentList.Add(expr);
            return this;
        }

        public DataFilter<TModel> AddCustomQueryExpression(string field, Expression<Func<TModel, bool>> expression)
        {
            DataFilterQueryExpression<TModel> expr = new DataFilterQueryExpression<TModel>
            {
                Field = field,
                Expression = expression
            };
            CustomQueryExpressionList.Add(expr);
            return this;
        }
    }
}
