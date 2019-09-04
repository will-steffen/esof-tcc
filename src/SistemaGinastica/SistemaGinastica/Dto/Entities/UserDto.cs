using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class UserDto : PersonDataModelDto
    {     
        public string username { get; set; }

        public UserDto() { }

        public UserDto(User model) : base(model)
        {
            username = model.Username;
        }
    }
}
