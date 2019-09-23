using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("payment")]
    public class Payment : BaseModel
    {
        [Column("dt_expected")]        
        public DateTime ExpectedDate { get; set; }

        [Column("dt_payment")]
        public DateTimeOffset? PaymentDate { get; set; }

        [Column("num_value")]
        public float Value { get; set; }

        [Column("id_customer")]
        public long IdCustomer { get; set; }

        [ForeignKey("IdCustomer")]
        [InverseProperty("PaymentList")]
        public virtual Customer Customer { get; set; }

        public virtual List<Vacation> VacationList { get; set; }
    }
}
