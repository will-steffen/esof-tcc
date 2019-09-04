using SistemaGinastica.DomainModel;
using SistemaGinastica.DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SistemaGinastica.DataAccess.Entities
{
    public class UserDataAccess : BaseDataAccess<User>
    {
        public UserDataAccess(ApplicationContext ctx) : base(ctx) { }

        public User GetByUsername(string username)
        {
            return GetBaseQueryable()
                .FirstOrDefault(x => x.Username.Equals(username));
        }

        public bool ExistsByUsernameIgnoreId(string username, long ignoreId = -1)
        {
            return Set().Any(x => x.Username == username && x.Id != ignoreId);
        }
    }
}
