using SistemaGinastica.DomainModel.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("customer")]
    public class Customer : PersonDataModel
    {
        [Column("txt_address")]
        [StringLength(250)]
        [Required]
        public string Address { get; set; }

        [Column("dt_birth")]
        [Required]
        public DateTime BirthDate { get; set; }

        [Column("cd_plan_type")]
        [Required]
        public PlanType PlanType { get; set; }

        [Column("num_plan_value")]
        public float PlanValue { get; set; }

        [Column("txt_registration")]
        [StringLength(150)]
        [Required]
        public string Registration { get; set; }

        public virtual List<Payment> PaymentList { get; set; }
        public virtual List<Presence> PresenceList { get; set; }
        public virtual List<PhysicalEvaluation> PhysicalEvaluationList { get; set; }

        
    }
}
