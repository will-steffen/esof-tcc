using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SistemaGinastica.DomainModel.Exceptions;
using System.Collections.Generic;

namespace SistemaGinastica.Controllers
{
    [Route("api/[controller]")]
    public class BaseController : Controller
    {        
        protected ActionResult HandleError(SgException error)
        {
            if (typeof(EntityNotFoundException).Equals(error.GetType()))
            {
                return StatusCode(StatusCodes.Status424FailedDependency, error.Message);
            }
            if (typeof(NotUniqueException).Equals(error.GetType()))
            {
                return Conflict(error.Message);
            }            
            return BadRequest(error.Message);
        }
    }
}
