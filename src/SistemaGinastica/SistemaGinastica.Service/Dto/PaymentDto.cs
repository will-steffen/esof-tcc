using SistemaGinastica.DomainModel.Entities;
using System;

namespace SistemaGinastica.Service.Dto
{
    public class PaymentDto : BaseModelDto
    {
        public DateTime expectedDate { get; set; }
        public DateTimeOffset? paymentDate { get; set; }
        public float value { get; set; }
        public long idCustomer { get; set; }

        public PaymentDto() { }

        public PaymentDto(Payment model) : base(model)
        {
            expectedDate = model.ExpectedDate;
            paymentDate = model.PaymentDate;
            value = model.Value;
            idCustomer = model.IdCustomer;
        }
    }
}


