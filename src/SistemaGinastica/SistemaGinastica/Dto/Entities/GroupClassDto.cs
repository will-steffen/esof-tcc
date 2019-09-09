using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class GroupClassDto : BaseModelDto
    {
        public GroupClassDto() { }

        public GroupClassDto(GroupClass model) : base(model)
        {
        }
    }
}
