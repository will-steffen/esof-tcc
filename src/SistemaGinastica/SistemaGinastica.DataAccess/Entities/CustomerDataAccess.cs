using Microsoft.EntityFrameworkCore;
using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class CustomerDataAccess : BaseDataAccess<Customer>
    {
        public CustomerDataAccess(ApplicationContext ctx) : base(ctx) { }

        public override IQueryable<Customer> GetBaseQueryable()
        {
            return Set()
                .Include(x => x.PaymentList)
                   .ThenInclude(p => p.VacationList);
        }

        public int CountActives()
        {
            return Set().Where(x => x.Active).Count();
        }

        public bool ExistsByCpfIgnoreId(string cpf, long ignoreId = -1)
        {
            return Set().Any(x => x.Cpf == cpf && x.Id != ignoreId);
        }

        public bool ExistsByRgIgnoreId(string rg, long ignoreId = -1)
        {
            return Set().Any(x => x.Rg == rg && x.Id != ignoreId);
        }
    }
}
