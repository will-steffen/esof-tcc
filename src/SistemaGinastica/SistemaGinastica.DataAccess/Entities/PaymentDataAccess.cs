using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class PaymentDataAccess : BaseDataAccess<Payment>
    {
        public PaymentDataAccess(ApplicationContext ctx) : base(ctx) { }
    }
}
