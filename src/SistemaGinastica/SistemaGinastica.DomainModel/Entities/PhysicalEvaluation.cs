using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("physical_evaluation")]
    public class PhysicalEvaluation : BaseModel
    {
        [Column("id_customer")]
        public long IdCustomer { get; set; }

        [ForeignKey("IdCustomer")]
        [InverseProperty("PhysicalEvaluationList")]
        public virtual Customer Customer { get; set; }



        [Column("id_user")]
        public long IdUser { get; set; }

        [ForeignKey("IdUser")]
        [InverseProperty("PhysicalEvaluationList")]
        public virtual User User { get; set; }
    }
}
