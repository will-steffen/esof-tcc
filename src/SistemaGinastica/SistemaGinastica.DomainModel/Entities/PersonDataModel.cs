using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    public class PersonDataModel : BaseModel
    {
        [Column("txt_name")]
        [StringLength(150)]
        [Required]
        public string Name { get; set; }

        [Column("txt_cpf")]
        [StringLength(20)]
        [Required]
        public string Cpf { get; set; }

        [Column("txt_rg")]
        [StringLength(20)]
        [Required]
        public string Rg { get; set; }
    }
}
