using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel.Authorization;
using SistemaGinastica.DomainModel.Entities;
using SistemaGinastica.DomainModel.Enums;
using SistemaGinastica.DomainModel.Exceptions;

namespace SistemaGinastica.Service.Entities
{
    public class UserService : BaseModelService<User, UserDataAccess>
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
                throw new UserNotFoundException($"Usuário informado ({username}) para login não existe no sistema");
            }

            string hashPassword = AuthorizationProvider.GetHash(password, user.Salt);
            if (hashPassword != user.HashPassword)
            {
                throw new InvalidCredentialsException($"Tentativa de login com o usuário ({username}) com senha incorreta");
            }

            return user;
        }

        protected void ValidateSave(User model)
        {
            if (DataAccess.ExistsByUsernameIgnoreId(model.Username, model.Id))
            {
                throw new NotUniqueException("Username");
            }
        }

        public long Include(string name, string cpf, string rg, string username, string password, UserType type)
        {
            User user = new User
            {
                Name = name,
                Cpf = cpf,
                Rg = rg,
                Username = username,
                Type = type,
                Salt = AuthorizationProvider.GenerateSalt()
            };

            user.HashPassword = AuthorizationProvider.GetHash(password, user.Salt);
            Save(user);
            return user.Id;

        }
    }
}
