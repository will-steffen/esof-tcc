using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using SistemaGinastica.DomainModel.Utils;
using SistemaGinastica.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.Service.Entities
{
    public class MockService
    {
        private UserService userService;
        private InstructorService instructorService;
        private GroupClassService groupClassService;
        private CustomerService customerService;
        private List<Instructor> instructorList = new List<Instructor>();

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
            if (userService.GetByUsername("admin") == null)
            {
                User user = userService.Include(new UserDto
                {
                    name = "Administrador do Sistema",
                    cpf = "948.388.280-04",
                    rg = "14.133.047-8",
                    password = "admin",
                    username = "admin",
                    type = UserType.ADMIN
                });
            }
        }

        public string Mock()
        {
            if (MockAreadyRun()) return "Já executado anteriormente";

            string str = "";
            str += CreateUsers();
            str += CreateInstructors();
            str += CreateGroupClasses();
            str += CreateCustomers();
            return str;
        }

        private string CreateUsers()
        {
            string str = "Usuários: ";
            try
            {
                string pass = "recepcionista";                
                userService.Include(new UserDto
                {
                    name = "Yago Renan da Cunha",
                    cpf = "409.342.675-96",
                    rg = "10.272.070-8",
                    password = pass,
                    username = pass,
                    type = UserType.RECEPCIONIST
                });
                str += "\n    - Tipo: 'Recepcionista' Usuário: '" + pass + "' / Senha: '" + pass + "'";

                pass = "fisio";
                userService.Include(new UserDto
                {
                    name = "Samuel Cauê Silveira",
                    cpf = "293.242.910-84",
                    rg = "18.185.866-6",
                    password = pass,
                    username = pass,
                    type = UserType.PHYSIOTHERAPIST
                });
                str += "\n    - Tipo: 'Fisioterapeuta' Usuário: '" + pass + "' / Senha: '" + pass + "'";

                pass = "gerente";
                userService.Include(new UserDto
                {
                    name = "Ayla Sabrina Viana",
                    cpf = "002.962.425-86",
                    rg = "14.206.074-4",
                    password = pass,
                    username = pass,
                    type = UserType.MANAGER
                });
                str += "\n    - Tipo: 'Gerente' Usuário: '" + pass + "' / Senha: '" + pass + "'";
            }
            catch(Exception e)
            {
                str += e.Message;
            }
            return str + "\n\n";
        }

        private string CreateInstructors()
        {
            string str = "Instrutores: ";
            try
            {
                instructorList.Add(instructorService.Include(new InstructorDto
                {
                    name = "Carlos Filipe Bento Ferreira",
                    cpf = "895.006.709-92",
                    rg = "48.833.234-5",
                    authorizedMuscle = true,
                    authorizedGroupClass = true,
                    active = true
                }));

                instructorList.Add(instructorService.Include(new InstructorDto
                {
                    name = "Luiz Juan Otávio Fernandes",
                    cpf = "824.708.646-82",
                    rg = "23.432.449-1",
                    authorizedMuscle = true,
                    authorizedGroupClass = true,
                    active = true
                }));

                instructorList.Add(instructorService.Include(new InstructorDto
                {
                    name = "Andreia Melissa Beatriz Farias",
                    cpf = "972.492.231-60",
                    rg = "41.910.492-6",
                    authorizedMuscle = true,
                    authorizedGroupClass = true,
                    active = true
                }));

                instructorList.Add(instructorService.Include(new InstructorDto
                {
                    name = "Diogo Arthur Manuel da Conceição",
                    cpf = "912.205.133-34",
                    rg = "32.242.953-5",
                    authorizedMuscle = true,
                    authorizedGroupClass = true,
                    active = true
                }));

                instructorList.Add(instructorService.Include(new InstructorDto
                {
                    name = "Alice Nair Lopes",
                    cpf = "983.190.882-16",
                    rg = "12.663.607-2",
                    authorizedMuscle = true,
                    authorizedGroupClass = true,
                    active = true
                }));

                str += "Ok";
            }
            catch(Exception e)
            {
                str += e.Message;
            }
            return str + "\n";
        }

        private string CreateGroupClasses()
        {
            string str = "Aulas em Grupo: ";
            try
            {
                groupClassService.Include(new GroupClassDto
                {
                    initHour = DateUtils.Now().AddHours(-1),
                    endHour = DateUtils.Now(),
                    room = "Sala 3",
                    name = "Spnning",
                    idInstructor = GetInstructor().Id,
                    active = true
                });
                str += "Ok";
            }
            catch (Exception e)
            {
                str += e.Message;
            }
            return str + "\n";
        }

        private string CreateCustomers()
        {
            string str = "Clientes: ";
            try
            {
                Customer customer1 = customerService.Include(new CustomerDto
                {
                    name = "Aline Melissa Jesus",
                    cpf = "604.811.555-54",
                    rg = "21.338.926-5",
                    address = "Quadra Dezenove",
                    birthDate = new DateTime(1992, 9, 8),
                    planType = PlanType.Annually,
                    planValue = 930,
                    active = true,
                    startMockUse = new DateTime(2018, 1, 7)
                });

                Customer customer2 = customerService.Include(new CustomerDto
                {
                    name = "Augusto Roberto Aragão",
                    cpf = "277.213.262-57",
                    rg = "27.810.587-7",
                    address = "Rua Mirandinha",
                    birthDate = new DateTime(1975, 2, 15),
                    planType = PlanType.Monthly,
                    planValue = 125,
                    active = true,
                    startMockUse = new DateTime(2019, 7, 15)
                });

                Customer customer3 = customerService.Include(new CustomerDto
                {
                    name = "Vanessa Elza Márcia Farias",
                    cpf = "631.071.622-05",
                    rg = "31.165.080-6",
                    address = "Rua Martin Maul",
                    birthDate = new DateTime(1986, 12, 24),
                    planType = PlanType.Annually,
                    planValue = 900,
                    active = true,
                    startMockUse = new DateTime(2015, 12, 27)
                });

                Customer customer4 = customerService.Include(new CustomerDto
                {
                    name = "Francisco Alexandre Fogaça",
                    cpf = "007.760.262-59",
                    rg = "33.572.900-9",
                    address = "Rua Alto do Paraná",
                    birthDate = new DateTime(1986, 7, 15),
                    planType = PlanType.Monthly,
                    planValue = 130,
                    active = true,
                    startMockUse = new DateTime(2019, 5, 2)
                });

                Customer customer5 = customerService.Include(new CustomerDto
                {
                    name = "Thales Manoel João Ramos",
                    cpf = "770.772.627-82",
                    rg = "28.273.236-6",
                    address = "Rua João dos Santos Filho",
                    birthDate = new DateTime(1995, 3, 21),
                    planType = PlanType.Monthly,
                    planValue = 130,
                    active = true,
                    startMockUse = new DateTime(2018, 5, 3)
                });

                Customer customer6 = customerService.Include(new CustomerDto
                {
                    name = "Kaique Renan Pereira",
                    cpf = "918.166.898-82",
                    rg = "14.254.500-4",
                    address = "Rua Ronaldo Petrucci",
                    birthDate = new DateTime(1979, 1, 7),
                    planType = PlanType.Annually,
                    planValue = 900,
                    active = true
                });


                str += "Ok";
            }
            catch (Exception e)
            {
                str += e.Message;
            }
            return str + "\n";
        }

        private Instructor GetInstructor()
        {
            return instructorList[new Random().Next(instructorList.Count - 1)];
        }


        public bool MockAreadyRun()
        {
            return userService.GetByUsername("fisio") != null;
        }
    }
}
