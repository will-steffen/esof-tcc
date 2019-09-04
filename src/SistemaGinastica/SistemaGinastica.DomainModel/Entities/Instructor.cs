﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SistemaGinastica.DomainModel.Entities
{
    [Table("instrutor")]
    public class Instructor : PersonDataModel
    {
        [Column("fl_authorized_muscle")]       
        public bool AuthorizedMuscle { get; set; }

        [Column("fl_authorized_group_class")]
        public bool AuthorizedGroupClass { get; set; }

        public virtual List<GroupClass> GroupClassList { get; set; }
    }
}
