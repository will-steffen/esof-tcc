using SistemaGinastica.DomainModel.Enums;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class MockService
    {
        public UserService userService;

        public MockService(UserService userService)
        {
            this.userService = userService;
        }

        public void Mock()
        {
            UserDto dto = new UserDto
            {
                name = "Admin",
                cpf = "00000000000",
                rg = "000000003",
                password = "admin",
                username = "admin",
                type = UserType.ADMIN
            };
            userService.Include(dto);
        }
    }
}
