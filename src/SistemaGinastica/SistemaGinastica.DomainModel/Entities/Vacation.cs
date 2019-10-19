using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("vacation")]
    public class Vacation : BaseModel
    {
        [Column("dt_init")]
        public DateTime InitDate { get; set; }

        [Column("dt_end")]
        public DateTime EndDate { get; set; }


        [Column("id_payment")]
        public long IdPayment { get; set; }

        [ForeignKey("IdPayment")]
        [InverseProperty("VacationList")]
        public virtual Payment Payment { get; set; }

        public TimeSpan GetDuration()
        {
            return EndDate.Subtract(InitDate);
        }
    }
}
