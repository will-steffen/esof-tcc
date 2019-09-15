using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;

namespace SistemaGinastica.Service.Dto
{
    public class UserDto : PersonDataModelDto
    {     
        public string username { get; set; }
        public UserType type { get; set; }
        public string password { get; set; }

        public UserDto() { }

        public UserDto(User model) : base(model)
        {
            username = model.Username;
            type = model.Type;
        }
    }
}
