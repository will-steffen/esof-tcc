using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public class FilterDto
    {
        public int pageSize { get; set; }
        public int totalResults { get; set; }
        public int page { get; set; }
        public object data { get; set; }
        public string orderByField { get; set; }
        public string orderByDirection { get; set; }
        public List<FilterFieldDto> fields { get; set; }

        public DataFilter<TBaseModel> GetDataFilterBase<TBaseModel>(
            Dictionary<string, string> fieldMap = null, Dictionary<string, string> fieldMapOr = null)
            where TBaseModel : BaseModel
        {
            DataFilter<TBaseModel> filter = new DataFilter<TBaseModel>();
            filter.PageSize = pageSize;
            filter.Page = page;
            filter.OrderByDirection = orderByDirection != null && orderByDirection.ToLower().Equals("desc") ? "DESC" : "ASC";

            if (fieldMap != null)
            {
                fields.ForEach(field =>
                {
                    if (fieldMap.ContainsKey(field.field))
                    {
                        filter.AddParam(fieldMap[field.field], field.type, field.argument);
                    }
                });
            }

            if (fieldMapOr != null)
            {
                fieldMapOr.ToList().ForEach(map =>
                {
                    DataFilterGroup group = new DataFilterGroup(FilterGroupType.Or);
                    fields.Where(x => x.field == map.Key).ToList().ForEach(field =>
                    {
                        group.AddParam(map.Value, field.type, field.argument);
                    });
                    filter.AddGroup(group);
                });

            }

            return filter;
        }
    }
}
