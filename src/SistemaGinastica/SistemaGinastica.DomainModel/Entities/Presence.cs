using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("presence")]
    public class Presence : BaseModel
    {
        [Column("id_customer")]
        public long IdCustomer { get; set; }

        [ForeignKey("IdCustomer")]
        [InverseProperty("PresenceList")]
        public virtual Customer Customer { get; set; }



        [Column("id_group_class")]
        public long IdGroupClass { get; set; }

        [ForeignKey("IdGroupClass")]
        [InverseProperty("PresenceList")]
        public virtual GroupClass GroupClass { get; set; }
    }
}
