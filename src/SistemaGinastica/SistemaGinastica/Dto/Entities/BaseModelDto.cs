using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class BaseModelDto
    {
        public long id { get; set; }
        public DateTimeOffset createDate { get; set; }
        public DateTimeOffset updateDate { get; set; }

        public BaseModelDto() { }

        public BaseModelDto(BaseModel model)
        {
            id = model.Id;
            createDate = model.CreateDate;
            updateDate = model.UpdateDate;
        }

    }
}
