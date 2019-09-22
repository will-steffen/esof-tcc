using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DataAccess.DataFilter;
using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.Service.Dto;
using SistemaGinastica.Service.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SistemaGinastica.Controllers
{
    public class BaseCrudDtoController<TModel, TService, TDataAccess, TDto> : BaseController
        where TModel : BaseModel
        where TService : BaseCrudDtoService<TModel, TDataAccess, TDto>
        where TDataAccess : BaseDataAccess<TModel>
        where TDto : BaseModelDto
    {
        protected TService Service;
        protected Dictionary<string, string> fieldFilterMap = new Dictionary<string, string>();
        protected Dictionary<string, string> fieldFilterMapOr = null;
        protected Dictionary<string, string> fieldFilterMapOrder = null;

        public BaseCrudDtoController(TService service)
        {
            Service = service;
        }

        [HttpGet]
        [Authorize]
        public virtual ActionResult Get()
        {
            return Ok(Service.List().Select(x => GetDto(x)));
        }

        [HttpGet("{id}")]
        [Authorize]
        public virtual ActionResult GetById(long id)
        {
            try
            {
                return Ok(GetDto(Service.FindById(id)));
            }
            catch (SgException e)
            {
                return HandleError(e);
            }
        }

        [HttpPost("filter")]
        [Authorize]
        public virtual ActionResult<FilterDto> Filter([FromBody] FilterDto filterDTO)
        {
            var filter = filterDTO.GetDataFilterBase<TModel>(fieldFilterMap, fieldFilterMapOr);
            if (fieldFilterMapOrder == null) fieldFilterMapOrder = fieldFilterMap;
            filter.SetOrderBy(filterDTO.orderByField, fieldFilterMapOrder);

            filter = Service.ListByFilter(filter);
            filterDTO.data = filter.Data.Select(x => GetDto(x)).ToList();            
            filterDTO.totalResults = filter.TotalCount;

            return Ok(filterDTO);
        }

        [HttpPost]
        [Authorize]
        public virtual ActionResult<long> Include([FromBody] TDto dto)
        {
            try
            {
                return Ok(Service.Include(dto));
            }
            catch (SgException e)
            {
                return HandleError(e);
            }
        }

        
        [HttpPut]
        [Authorize]
        public virtual ActionResult<long> Update([FromBody] TDto dto)
        {
            try
            {
                return Ok(Service.Update(dto));
            }
            catch (SgException e)
            {
                return HandleError(e);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public virtual ActionResult Delete(long id)
        {
            try {
                Service.Delete(id);
                return Ok();
            }
            catch (SgException e) { return HandleError(e); }
        }

        protected TDto GetDto(TModel model)
        {
            return (TDto)Activator.CreateInstance(typeof(TDto), new object[] { model });
        }
    }
}
