using LinqKit;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Linq.Dynamic.Core;
using System.Text;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DataAccess.Entities;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public static class BaseDataAccessFilterExtensions
    {
        public static DataFilter<T> ListByFilter<T>(
            this BaseDataAccess<T> dataAccess, DataFilter<T> filter)
            where T : BaseModel
        {
            DataFilterGroup rootParamGroup = filter.ParamGroup;
         
            IQueryable<T> filteredQuery = GetFilteredQuery(dataAccess.GetBaseQueryable(), rootParamGroup, filter);
            if(filter.CustomQueryExpression != null)
            {
                filteredQuery = filteredQuery.Where(filter.CustomQueryExpression);
            }
            filteredQuery = GetOrderedQuery(filteredQuery, filter);

            if (filter.Paginated)
            {
                int skipSize = (filter.Page - 1) * filter.PageSize;
                filter.Data = filteredQuery.Skip(skipSize).Take(filter.PageSize).ToList();                
            }
            else
            {
                filter.Data = filteredQuery.ToList();
            }

            filter.TotalCount = filteredQuery.Count();

            return filter;
        }


        private static IQueryable<T> GetFilteredQuery<T>(IQueryable<T> queryable, DataFilterGroup rootParamGroup, DataFilter<T> filter)
            where T : BaseModel
        {
            Expression<Func<T, bool>> predicate = GetGroupExpression<T>(rootParamGroup, filter);           
            return queryable.AsExpandable().Where(predicate);
        }

        private static Expression<Func<T, bool>> GetGroupExpression<T>(DataFilterGroup paramGroup, DataFilter<T> filter)
            where T : BaseModel
        {
            bool startParam = !(paramGroup.Type == FilterGroupType.Or 
                && (paramGroup.ParamGroupList.Any() || paramGroup.ParamList.Any()));
            Expression<Func<T, bool>> expressions = PredicateBuilder.New<T>(startParam);

            paramGroup.ParamList.ForEach(param =>
            {
                Expression<Func<T, bool>> expression;           

                DataFilterQueryExpression<T> customExpression = filter.CustomQueryExpressionList.FirstOrDefault(x => x.Field == param.Field);
                if (customExpression != null)
                {
                    expression = customExpression.Expression;
                }
                else
                {
                    expression = FilterExpressionProvider.CreateExpression<T>(param);
                }


                expressions = IncludeExpression(expressions, expression, paramGroup.Type);
            });

            paramGroup.ParamGroupList.ForEach(group =>
            {
                Expression<Func<T, bool>> expression = GetGroupExpression<T>(group, filter);
                expressions = IncludeExpression(expressions, expression, paramGroup.Type);
            });


            return expressions;
        }        

        private static Expression<Func<T, bool>> IncludeExpression<T>(
            Expression<Func<T, bool>> rootPredicate, Expression<Func<T, bool>> expression, FilterGroupType type)
        {
            switch (type)
            {
                case FilterGroupType.And:
                    rootPredicate = rootPredicate.And(expression);
                    break;
                case FilterGroupType.Or:
                    rootPredicate = rootPredicate.Or(expression);
                    break;
                default:
                    throw new InvalidEnumArgumentException();
            }
            return rootPredicate;
        }


        private static IQueryable<T> GetOrderedQuery<T>(IQueryable<T> queryable, DataFilter<T> filter)
            where T : BaseModel
        {
            if(filter.CustomOrderExpressionList.Any(x => x.OrderByField == filter.OrderByField && x.OrderByDirection == filter.OrderByDirection))
            {
                return GetCustomOrderedQuery(queryable, filter);
            }

            if (filter.OrderByField.Contains("."))
            {
                string[] s = filter.OrderByField.Split('.');
                string propertyName = s[0];

                Type baseType = filter.GetType().GetGenericArguments().FirstOrDefault();
                PropertyInfo property = baseType.GetProperty(propertyName);

                if (property.PropertyType.Name.Contains("List"))
                {
                    return queryable;
                }
                else
                {
                    return queryable.OrderBy(filter.OrderByField + " " + filter.OrderByDirection);
                }
            }
            else
            {
                return queryable.OrderBy(filter.OrderByField + " " + filter.OrderByDirection);
            }            

        }

        private static IQueryable<T> GetCustomOrderedQuery<T>(IQueryable<T> queryable, DataFilter<T> filter)
            where T : BaseModel
        {
            DataFilterOrderExpression<T> custom = filter.CustomOrderExpressionList
                .FirstOrDefault(x => x.OrderByField == filter.OrderByField && x.OrderByDirection == filter.OrderByDirection);
            if(custom.OrderByDirection == "ASC")
                return queryable.OrderBy(custom.Expression);
            else
                return queryable.OrderByDescending(custom.Expression);
        }
       
    }
}
