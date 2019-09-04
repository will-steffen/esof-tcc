using SistemaGinastica.DomainModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaGinastica.DomainModel.Authorization
{
    public class UserIdentification
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Address { get; set; }
        public string RequestPath { get; set; }

        private static string tokenInfoSep = "::";

        public string GetTokenIdentification()
        {
            return Id + tokenInfoSep + Username;
        }

        public UserIdentification() { }

        public UserIdentification(long id, string username)
        {
            Id = id;
            Username = username;
        }

        public UserIdentification(string tokenIdentification)
        {
            string[] info = tokenIdentification.Split(tokenInfoSep);
            Id = long.Parse(info[0]);
            Username = info[1];
        }

        public static UserIdentification NoUser()
        {
            return new UserIdentification(0, Constants.DEFAULT_SYSTEM_USER);
        }
    }
}
