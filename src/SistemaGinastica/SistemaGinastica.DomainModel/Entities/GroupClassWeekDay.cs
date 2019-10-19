using SistemaGinastica.DomainModel.Enums;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("group_class_week_day")]
    public class GroupClassWeekDay : BaseModel
    {
        [Column("cd_week_day")]
        public WeekDay WeekDay { get; set; }

        [Column("id_group_class")]
        public long IdGroupClass { get; set; }

        [ForeignKey("IdGroupClass")]
        [InverseProperty("WeekDayList")]
        public virtual GroupClass GroupClass { get; set; }
    }
}
