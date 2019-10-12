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
        private CustomerService customerService;

        public MockService(
            UserService userService,
            InstructorService instructorService,
            GroupClassService groupClassService,
            CustomerService customerService)
        {
            this.userService = userService;
            this.instructorService = instructorService;
            this.groupClassService = groupClassService;
            this.customerService = customerService;
        }

        public void AdminUser()
        {
            User user = userService.Include(new UserDto
            {
                name = "Administrador do Sistema",
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
            CreateUserTypes();
            Instructor instructor1 = instructorService.Include(new InstructorDto
            {
                name = "Administrador do Sistema",
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

            Customer customer = customerService.Include(new CustomerDto
            {
                name = "Cliente número 1",
                cpf = "00000000000",
                rg = "000000003",
                address = "Rua do Comercio",
                birthDate = DateTime.Now.AddYears(-23),
                planType = PlanType.Annually,
                planValue = 900
            });
        }

        private void CreateUserTypes()
        {
            userService.Include(new UserDto
            {
                name = "Jorge Chagas",
                cpf = "00000000000",
                rg = "000000003",
                password = "recepcionista",
                username = "recepcionista",
                type = UserType.RECEPCIONIST
            });

            userService.Include(new UserDto
            {
                name = "Roberto da Silva",
                cpf = "00000000000",
                rg = "000000003",
                password = "fisio",
                username = "fisio",
                type = UserType.PHYSIOTHERAPIST
            });

            userService.Include(new UserDto
            {
                name = "Fátima Maria do Santos",
                cpf = "00000000000",
                rg = "000000003",
                password = "gerente",
                username = "gerente",
                type = UserType.MANAGER
            });
        }
    }
}
