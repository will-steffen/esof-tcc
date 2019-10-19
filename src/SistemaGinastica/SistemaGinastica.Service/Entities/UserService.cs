using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Authorization;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using SistemaGinastica.DomainModel.Exceptions;
using SistemaGinastica.Service.Dto;

namespace SistemaGinastica.Service.Entities
{
    public class UserService : BaseCrudDtoService<User, UserDataAccess, UserDto>
    {
        public UserService(UserDataAccess da) : base(da) { }

        public string Authenticate(string username, string password)
        {
            User user = ValidateUserPassword(username, password);            
            Save(user);

            UserIdentification identification = new UserIdentification(user.Id, user.Username);

            return AuthorizationProvider.GenerateToken(user.Id, user.Username);
        }

        private User ValidateUserPassword(string username, string password)
        {
            User user = DataAccess.GetByUsername(username);

            if (user == null)
            {
                throw new EntityNotFoundException($"Usuário informado ({username}) para login não existe no sistema");
            }

            string hashPassword = AuthorizationProvider.GetHash(password, user.Salt);
            if (hashPassword != user.HashPassword)
            {
                throw new InvalidCredentialsException($"Tentativa de login com o usuário ({username}) com senha incorreta");
            }

            return user;
        }
        

        protected override void ValidateSave(User model)
        {
            if (DataAccess.ExistsByUsernameIgnoreId(model.Username, model.Id))
            {
                throw new NotUniqueException("Username");
            }
        }

        protected override User Map(User model, UserDto dto)
        {
            model.Name = dto.name;
            model.Cpf = dto.cpf;
            model.Rg = dto.rg;
            model.Username = dto.username;
            model.Type = dto.type;

            if (!string.IsNullOrEmpty(dto.password))
            {
                model.Salt = AuthorizationProvider.GenerateSalt();
                model.HashPassword = AuthorizationProvider.GetHash(dto.password, model.Salt);
            }

            return base.Map(model, dto);
        }

        public User GetByUsername(string username)
        {
            return DataAccess.GetByUsername(username);
        }

    }
}
