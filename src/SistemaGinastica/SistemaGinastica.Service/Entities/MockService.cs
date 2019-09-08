using SistemaGinastica.DomainModel.Enums;
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
            userService.Include("Admin", "00000000000", "000000003", "admin", "admin", UserType.ADMIN);
        }
    }
}
