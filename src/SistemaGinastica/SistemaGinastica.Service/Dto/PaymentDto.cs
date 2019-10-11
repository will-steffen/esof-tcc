using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.Service.Dto
{
    public class PaymentDto : BaseModelDto
    {
        public DateTime expectedDate { get; set; }
        public DateTimeOffset? paymentDate { get; set; }
        public float value { get; set; }
        public long idCustomer { get; set; }
        public DateTime periodStartDate { get; set; }
        public DateTime periodEndDate { get; set; }
        public List<VacationDto> vacationList { get; set; }

        public PaymentDto() { }

        public PaymentDto(Payment model) : base(model)
        {
            expectedDate = model.ExpectedDate;
            paymentDate = model.PaymentDate;
            value = model.Value;
            idCustomer = model.IdCustomer;

            periodStartDate = model.PeriodStartDate;
            periodEndDate = model.PeriodEndDate;

            vacationList = model.VacationList != null ? model.VacationList.Select(x => new VacationDto(x)).ToList() : null;


        }
    }
}


