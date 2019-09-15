using SistemaGinastica.DataAccess.DataFilter;
using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Exceptions;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class BaseModelService<TModel, TDataAccess> 
        where TModel : BaseModel
        where TDataAccess : BaseDataAccess<TModel>
    {
        protected TDataAccess DataAccess;

        public BaseModelService(TDataAccess da)
        {
            DataAccess = da;
        }

        public IEnumerable<TModel> List()
        {
            return DataAccess.List();
        }

        public TModel FindById(long id)
        {
            TModel model = DataAccess.GetById(id);
            if (model == null)
            {
                throw new EntityNotFoundException($"FindById em {GetType().Name} não encontrou o Id {id}");
            }
            return model;
        }

        public virtual TModel GetById(long id)
        {
            return DataAccess.GetById(id);
        }

        public virtual void Save(TModel model)
        {
            DataAccess.Save(model);
        }

        public virtual void Delete(TModel model)
        {
            DataAccess.Delete(model);
        }

        public virtual DataFilter<TModel> ListByFilter(DataFilter<TModel> filter)
        {
            return DataAccess.ListByFilter(filter);
        }
    }
}
