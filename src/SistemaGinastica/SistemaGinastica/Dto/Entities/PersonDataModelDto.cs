using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class PersonDataModelDto : BaseModelDto
    {
        public string name { get; set; }
        public string rg { get; set; }
        public string cpf { get; set; }

        public PersonDataModelDto() { }

        public PersonDataModelDto(PersonDataModel model) : base(model)
        {
            name = model.Name;
            rg = model.Rg;
            cpf = model.Cpf;
        }
    }
}
