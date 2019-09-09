using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DataAccess.DataFilter
{
    public class DataFilterGroup
    {
        public FilterGroupType Type { get; set; } = FilterGroupType.And;
        public List<DataFilterParam> ParamList { get; set; } = new List<DataFilterParam>();
        public List<DataFilterGroup> ParamGroupList { get; set; } = new List<DataFilterGroup>();

        public DataFilterGroup() { }
        public DataFilterGroup(FilterGroupType type)
        {
            Type = type;
        }

        public void AddParam(DataFilterParam param)
        {
            ParamList.Add(param);

        }
        public void AddParam(string field, FilterType type, object argument = null)
        {
            AddParam(new DataFilterParam(field, type, argument));
        }

        public void AddGroup(DataFilterGroup group)
        {
            ParamGroupList.Add(group);
        }
    }
}
