using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("group_class")]
    public class GroupClass : BaseModel
    {
        [Column("hr_init")]
        public DateTime InitHour { get; set; }

        [Column("hr_end")]
        public DateTime EndHour { get; set; }

        [Column("txt_room")]
        [StringLength(250)]
        [Required]
        public string Room { get; set; }



        [Column("id_instructor")]
        public long IdInstructor { get; set; }

        [ForeignKey("IdInstructor")]
        [InverseProperty("GroupClassList")]
        public virtual Instructor Instructor { get; set; }       



        public virtual List<Presence> PresenceList { get; set; }
    }
}
