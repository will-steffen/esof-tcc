using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class CustomerDataAccess : BaseDataAccess<Customer>
    {
        public CustomerDataAccess(ApplicationContext ctx) : base(ctx) { }
    }
}
