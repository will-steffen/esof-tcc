using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("user")]
    public class User : PersonDataModel
    {    
        public virtual List<PhysicalEvaluation> PhysicalEvaluationList { get; set; }

        [Column("txt_username")]
        [StringLength(150)]
        [Required]
        public string Username { get; set; }

        [Column("txt_hash_password")]
        [StringLength(250)]
        public string HashPassword { get; set; }

        [Column("txt_salt")]
        [StringLength(250)]
        public string Salt { get; set; }
    }
}
