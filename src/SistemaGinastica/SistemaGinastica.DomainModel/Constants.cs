using System;
using System.Collections.Generic;
using System.Text;

namespace SistemaGinastica.DomainModel
{
    public static class Constants
    {
        public static string TRUE = "True";
        public static string FALSE = "False";

        public static string CONFIG_FILE_NAME = "appsettings.json";
        public static string USE_MEMORY_DB = "UseMemoryDB";
        public static string RUN_START_TASK = "RunStartTask";
        public static string MEMORY_DB_NAME = "MEMORY_DB_NAME";
        public static string DEFAULT_CONNECTION = "DefaultConnection";
        public static string CORS_POLICY_NAME = "CORS_POLICY_NAME";
        public static string FORCE_HTTPS_LINK = "ForceHttpsLink";

        // Autorizathion
        public const string GENERIC_IDENTITY_TYPE = "Login";
        public const string PERMISSION_POLICY_NAME = "Bearer";
        public const string AUTH_TOKEN_DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
        public const string DEFAULT_SYSTEM_USER = "SYSTEM";

    }
}
