using Microsoft.EntityFrameworkCore;
using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class BaseDataAccess<TModel> where TModel : BaseModel
    {
        protected ApplicationContext Context;

        public BaseDataAccess(ApplicationContext ctx)
        {
            Context = ctx;
        }

        private void SaveChanges()
        {
            Context.SaveChanges();
        }

        public virtual IEnumerable<TModel> List()
        {            
            return GetBaseQueryable();
        }

        public virtual TModel GetById(long id)
        {           
            return GetBaseQueryable().FirstOrDefault(x => x.Id == id);
        }

        public virtual void Save(TModel model)
        {
            DbSet<TModel> set = Context.Set<TModel>();
            model.UpdateDate = DateTimeOffset.Now;
            if (model.Id == 0)
            {
                model.CreateDate = model.UpdateDate;
                set.Add(model);
            }
            else
            {
                set.Attach(model);
                Context.Entry(model).State = EntityState.Modified;
            }
            SaveChanges();
        }

        public virtual void Delete(TModel model)
        {
            Context.Set<TModel>().Remove(model);
            SaveChanges();
        }

        public virtual IQueryable<TModel> GetBaseQueryable()
        {
            return Set();
        }

        public IQueryable<TModel> Set()
        {
            return Context.Set<TModel>();
        }
    }
}
