using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    public class BaseModel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id")]
        public long Id { get; set; }

        [Column("dt_create")]
        public DateTimeOffset CreateDate { get; set; }

        [Column("dt_update")]
        public DateTimeOffset UpdateDate { get; set; }
    }
}
