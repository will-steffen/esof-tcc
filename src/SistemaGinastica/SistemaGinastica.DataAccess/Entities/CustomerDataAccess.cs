﻿using Microsoft.EntityFrameworkCore;
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

        public int Count()
        {
            return Set().Count();
        }
    }
}
