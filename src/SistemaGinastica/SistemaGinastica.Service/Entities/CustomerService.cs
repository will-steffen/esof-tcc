using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class CustomerService : BaseModelService<Customer, CustomerDataAccess>
    {
        public CustomerService(CustomerDataAccess da) : base(da) { }
    }
}
