using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class PaymentService : BaseModelService<Payment, PaymentDataAccess>
    {
        public PaymentService(PaymentDataAccess da) : base(da) { }
    }
}
