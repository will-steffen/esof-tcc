using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using SistemaGinastica.DomainModel;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Threading.Tasks;

namespace SistemaGinastica.DomainModel.Authorization
{
    public static class AuthorizationProvider
    {
        private static SigningConfigurations SigningConfigurations;

        private static string AUDIENCE = "Audience";
        private static string ISSUER = "ISSUER";
        private static int TOKEN_SECONDS = 120000;

        /// <summary>
        /// Configura os parâmetros para a forma de validação de Token de Acesso
        /// </summary>
        public static void Configure(IServiceCollection services)
        {
            SigningConfigurations = new SigningConfigurations();

            services.AddAuthentication(authOptions =>
            {
                authOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                authOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(bearerOptions =>
            {
                var paramsValidation = bearerOptions.TokenValidationParameters;
                paramsValidation.IssuerSigningKey = SigningConfigurations.Key;
                paramsValidation.ValidAudience = AUDIENCE;
                paramsValidation.ValidIssuer = ISSUER;

                // Valida a assinatura de um token recebido
                paramsValidation.ValidateIssuerSigningKey = true;

                // Verifica se um token recebido ainda é válido
                paramsValidation.ValidateLifetime = true;

                // Tempo de tolerância para a expiração de um token (utilizado
                // caso haja problemas de sincronismo de horário entre diferentes
                // computadores envolvidos no processo de comunicação)
                paramsValidation.ClockSkew = TimeSpan.Zero;
            });

            services.AddSingleton<IAuthorizationPolicyProvider, AuthorizationPolicyProvider>();            
        }

        /// <summary>
        /// Cria um Token de Acesso válido para o sistema, com identificação do usuário
        /// </summary>
        public static string GenerateToken(long userId, string username)
        {
            return GenerateToken(new UserIdentification(userId, username));
        }

        /// <summary>
        /// Cria um Token de Acesso válido para o sistema, com identificação do usuário
        /// </summary>
        public static string GenerateToken(UserIdentification userIdentification)
        {
            string guid = Guid.NewGuid().ToString("N");
            string userIdentStr = userIdentification.GetTokenIdentification();

            ClaimsIdentity identity = new ClaimsIdentity(
                    new GenericIdentity(userIdentStr, Constants.GENERIC_IDENTITY_TYPE),
                    new[] {
                        new Claim(JwtRegisteredClaimNames.Jti, guid),
                        new Claim(JwtRegisteredClaimNames.UniqueName, userIdentStr)
                    }
                );

            DateTime created = DateTime.Now;
            DateTime expiration = created +
                TimeSpan.FromSeconds(TOKEN_SECONDS);

            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            SecurityToken securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = ISSUER,
                Audience = AUDIENCE,
                SigningCredentials = SigningConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = created,
                Expires = expiration
            });

            return handler.WriteToken(securityToken);
        }

        /// <summary>
        /// Extrai o identificador do usuário do contexto de autenticação
        /// </summary>
        public static UserIdentification GetUserIdentification(AuthorizationHandlerContext ctx)
        {
            return GetUserIdentification(ctx.User);
        }

        /// <summary>
        /// Extrai o identificador do usuário do contexto de autenticação
        /// </summary>
        public static UserIdentification GetUserIdentification(ClaimsPrincipal user)
        {
            if (!string.IsNullOrEmpty(user.Identity.Name))
            {
                return new UserIdentification(user.Identity.Name);
            }
            return UserIdentification.NoUser();
        }


        /// <summary>
        /// Cria um Salt para ser utilizado no Hash de senha do usuário
        /// </summary>
        public static string GenerateSalt()
        {
            byte[] salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            return Convert.ToBase64String(salt);
        }

        /// <summary>
        /// Obtém o Hash de uma string utilizando uma string salt
        /// </summary>
        public static string GetHash(string str, string saltStr)
        {
            byte[] salt = Convert.FromBase64String(saltStr);
            return Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: str,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA1,
            iterationCount: 10000,
            numBytesRequested: 256 / 8));
        }
    }
}
