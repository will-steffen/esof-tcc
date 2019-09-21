using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class MockService
    {
        private UserService userService;
        private InstructorService instructorService;
        private GroupClassService groupClassService;

        public MockService(
            UserService userService,
            InstructorService instructorService,
            GroupClassService groupClassService)
        {
            this.userService = userService;
            this.instructorService = instructorService;
            this.groupClassService = groupClassService;
        }

        public void AdminUser()
        {
            User user = userService.Include(new UserDto
            {
                name = "Admin",
                cpf = "00000000000",
                rg = "000000003",
                password = "admin",
                username = "admin",
                type = UserType.ADMIN
            });
        }

        public void Mock()
        {
            AdminUser();
            Instructor instructor1 = instructorService.Include(new InstructorDto
            {
                name = "Admin",
                cpf = "00000000000",
                rg = "000000003",
                authorizedMuscle = true,
                authorizedGroupClass = true
            });

            GroupClass groupClass = groupClassService.Include(new GroupClassDto
            {
                initHour = DateTime.Now.AddHours(-1),
                endHour = DateTime.Now,
                room = "Sala 3",
                name = "Spnning",
                idInstructor = instructor1.Id
            });
        }
    }
}
