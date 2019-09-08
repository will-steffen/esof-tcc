using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.Dto.Entities
{
    public class UserDto : PersonDataModelDto
    {     
        public string username { get; set; }
        public UserType type { get; set; }

        public UserDto() { }

        public UserDto(User model) : base(model)
        {
            username = model.Username;
            type = model.Type;
        }
    }
}
