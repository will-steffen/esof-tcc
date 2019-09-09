using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class CustomerDto : PersonDataModelDto
    {
        public CustomerDto() { }

        public CustomerDto(Customer model) : base(model)
        {
        }
    }
}
