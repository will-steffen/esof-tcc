using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.Service.Dto;
using System;

namespace SistemaGinastica.Service.Entities
{
    public class BaseCrudDtoService<TModel, TDataAccess, TDto> : BaseModelService<TModel, TDataAccess>
        where TModel : BaseModel
        where TDataAccess : BaseDataAccess<TModel>
        where TDto : BaseModelDto
    {
        public BaseCrudDtoService(TDataAccess da) : base(da) { }

        public virtual TModel Include(TDto dto)
        {
            TModel model = (TModel)Activator.CreateInstance(typeof(TModel));
            return MapAndSave(model, dto);
        }

        public virtual TModel Update(TDto dto)
        {
            TModel model = FindById(dto.id.Value);
            return MapAndSave(model, dto);
        }

        public virtual void Delete(long id)
        {
            TModel model = FindById(id);
            DataAccess.Delete(model);
        }

        protected virtual TModel Map(TModel model, TDto dto)
        {
            return model;
        }

        protected virtual TModel MapAndSave(TModel model, TDto dto)
        {
            model = Map(model, dto);
            ValidateSave(model);
            Save(model);
            return model;
        }

        protected virtual void ValidateSave(TModel model) { }
    }
}
