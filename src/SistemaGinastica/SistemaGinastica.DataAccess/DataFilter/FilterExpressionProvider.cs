using Microsoft.EntityFrameworkCore;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public static class FilterExpressionProvider
    {

        public static Expression<Func<T, bool>> CreateExpression<T>(DataFilterParam param)
            where T : BaseModel
        {
            if (param.Field.Contains("."))
            {
                return CreateExpressionWithReference<T>(param);
            }
            else
            {
                return CreateExpressionSimple<T>(param);
            }
        }

        private static Expression<Func<T, bool>> CreateExpressionWithReference<T>(DataFilterParam param)
            where T : BaseModel
        {
            PropertyInfo[] properties = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            string[] s = param.Field.Split('.');
            string propertyName = s[0];
            string subPropertyName = s[1];

            PropertyInfo property = properties.FirstOrDefault(p => p.Name.Equals(propertyName));
            if (property == null)
            {
                throw new InvalidOperationException(string.Format("Propriedade de nome {0} não econtrado no objeto {1}.", propertyName, typeof(T).Name));
            }

            if(property.PropertyType.Name.Contains("List"))
            {
                Type listPropertyType = property.PropertyType.GetGenericArguments().FirstOrDefault();
                PropertyInfo subListPropertyerty = listPropertyType.GetProperties(BindingFlags.Public | BindingFlags.Instance).FirstOrDefault(p => p.Name.Equals(subPropertyName));
                if (subListPropertyerty == null)
                {
                    throw new InvalidOperationException(string.Format("Propriedade de nome {0} não econtrado no objeto {1}.", subPropertyName, property.PropertyType.Name));
                }
                return GetListExpression<T>(param, property, subListPropertyerty, listPropertyType);
            }
                        
            List<PropertyInfo> subProperties = new List<PropertyInfo>();
            PropertyInfo xProperty = property;
            s.Where(x => x != propertyName).ToList().ForEach(xSubPropertyName =>
            {
                PropertyInfo subProperty = xProperty.PropertyType.GetProperties(BindingFlags.Public | BindingFlags.Instance).FirstOrDefault(p => p.Name.Equals(xSubPropertyName));
                if (subProperty == null)
                {
                    throw new InvalidOperationException(string.Format("Propriedade de nome {0} não econtrado no objeto {1}.", xSubPropertyName, property.PropertyType.Name));
                }
                subProperties.Add(subProperty);
                xProperty = subProperty;
            });
                

            return GetExpression<T>(param, property, subProperties);
        }

        private static Expression<Func<T, bool>> CreateExpressionSimple<T>(DataFilterParam param)
            where T : BaseModel
        {
            PropertyInfo[] properties = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            PropertyInfo property = properties.FirstOrDefault(x => x.Name.Equals(param.Field));

            if (property == null)
            {
                throw new InvalidOperationException(string.Format("Propriedade de nome {0} não econtrado no objeto {1}.", param.Field, typeof(T).Name));
            }

            return GetExpression<T>(param, property);
        }

        private static Expression<Func<T, bool>> GetExpression<T>(DataFilterParam param, PropertyInfo property, List<PropertyInfo> subProperties = null)
            where T : BaseModel
        {
            ParameterExpression parameter = Expression.Parameter(typeof(T), "f");
            Expression propertyAccess = Expression.MakeMemberAccess(parameter, property);
            if(subProperties != null)
            {
                subProperties.ForEach(subProperty =>
                {
                    propertyAccess = Expression.MakeMemberAccess(propertyAccess, subProperty);
                    property = subProperty;
                });                
            }            

            Expression call = ApplyLambdaFilter(param, property, propertyAccess);
            return Expression.Lambda<Func<T, bool>>(call, parameter);
        }

        private static Expression<Func<T, bool>> GetListExpression<T>(DataFilterParam param, PropertyInfo property, PropertyInfo subProperty, Type listPropertyType)
            where T : BaseModel
        {
            ParameterExpression subPropertyParameter = Expression.Parameter(listPropertyType, "s");
            Expression subPropertyAccess = Expression.MakeMemberAccess(subPropertyParameter, subProperty);
            Expression subCall = ApplyLambdaFilter(param, subProperty, subPropertyAccess);
    
            ParameterExpression parameter = Expression.Parameter(typeof(T), "f");
            Expression propertyAccess = Expression.MakeMemberAccess(parameter, property);
  
            MethodInfo anyMethod = typeof(Enumerable).GetMethods()
                .Single(m => m.Name.Equals("Any") && m.GetParameters().Count() == 2);
            anyMethod = anyMethod.MakeGenericMethod(listPropertyType);
  

            var subCallLambda = Expression.Lambda(subCall, subPropertyParameter);
            var call = Expression.Call(anyMethod, propertyAccess, subCallLambda);


            return Expression.Lambda<Func<T, bool>>(call, parameter);
        }


        private static Expression ApplyLambdaFilter(DataFilterParam param, PropertyInfo property, Expression nullablePropertyAccess)
        {
            Expression call;
            if (param.Type == FilterType.IsNull)
            {
                return Convert.ToBoolean(param.Argument)
                    ? Expression.Equal(nullablePropertyAccess, Expression.Constant(null))
                    : Expression.NotEqual(nullablePropertyAccess, Expression.Constant(null));
            }
            bool isNullable = false;
            Expression propertyAccess = nullablePropertyAccess;
            if (property.PropertyType.IsGenericType && property.PropertyType.GetGenericTypeDefinition().Equals(typeof(Nullable<>)))
            {
                isNullable = true;
                if (!property.PropertyType.Equals(param.Argument.GetType()))
                {
                    propertyAccess = Expression.Convert(nullablePropertyAccess, param.Argument.GetType());
                }
            }
            switch (param.Type)
            {
                case FilterType.Equal:
                    if ((Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType) == typeof(DateTime))
                    {
                        param.Argument = ((DateTime)param.Argument).Date;
                    }
                    if (param.Argument == null)
                    {
                        call = Expression.Constant(true);
                    }
                    else
                    {
                        call = Expression.Equal(propertyAccess,
                            property.PropertyType.IsEnum
                                ? Expression.Constant(Enum.Parse(property.PropertyType, param.Argument.ToString()))
                                : Expression.Constant(Convert.ChangeType(param.Argument.ToString(), Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType), property.PropertyType));
                    }
                    break;
                case FilterType.Greater:
                    call = Expression.GreaterThan(propertyAccess, Expression.Constant(param.Argument));
                    break;
                case FilterType.GreaterEqual:
                    call = Expression.GreaterThanOrEqual(propertyAccess, Expression.Constant(param.Argument));
                    break;
                case FilterType.Less:
                    call = Expression.LessThan(propertyAccess, Expression.Constant(param.Argument));
                    break;
                case FilterType.LessEqual:
                    call = Expression.LessThanOrEqual(propertyAccess, Expression.Constant(param.Argument));
                    break;
                case FilterType.Like:
                    string low = param.Argument.ToString().ToLower().Replace(" ", "%");
                    var likeMethod = typeof(DbFunctionsExtensions).GetMethod("Like", new[] { typeof(DbFunctions), typeof(string), typeof(string) });
                    call = Expression.Call(null, likeMethod, Expression.Constant(EF.Functions), propertyAccess, Expression.Constant($"%{low}%"));
                    break;
                default:
                    throw new InvalidEnumArgumentException();
            }

            if (isNullable)
            {
                call = Expression.AndAlso(Expression.NotEqual(nullablePropertyAccess, Expression.Constant(null)), call);
            }
            return call;
        }

    }
}
