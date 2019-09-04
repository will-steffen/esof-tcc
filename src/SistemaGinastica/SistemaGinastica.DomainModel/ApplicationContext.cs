using Microsoft.EntityFrameworkCore;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DomainModel
{
    public class ApplicationContext : ConfigApplicationContext
    {
        public DbSet<GroupClass> GroupClass { get; set; }
        public DbSet<PhysicalEvaluation> PhysicalEvaluation { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<ExamAnamnesis> ExamAnamnesis { get; set; }
        public DbSet<ExamSkinFold> ExamSkinFold { get; set; }
        public DbSet<ExamErgonometric> ExamErgonometric { get; set; }
        public DbSet<ExamErgonometricStep> ExamErgonometricStep { get; set; }
        public DbSet<Vacation> Vacation { get; set; }
        public DbSet<Instructor> Instructor { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Presence> Presence { get; set; }
        public DbSet<User> User { get; set; }
    }
}
