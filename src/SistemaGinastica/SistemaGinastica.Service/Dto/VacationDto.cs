using SistemaGinastica.DomainModel.Entities;
using System;

namespace SistemaGinastica.Service.Dto
{
    public class VacationDto : BaseModelDto
    {
        public DateTime initDate { get; set; }
        public DateTime endDate { get; set; }
        public long idPayment { get; set; }

        public VacationDto() { }

        public VacationDto(Vacation model) : base(model)
        {
            initDate = model.InitDate;
            endDate = model.EndDate;
        }
    }
}


