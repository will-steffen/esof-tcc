using SistemaGinastica.DomainModel.Entities;
using System;

namespace SistemaGinastica.Service.Dto
{
    public class BaseModelDto
    {
        public long? id { get; set; }
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
