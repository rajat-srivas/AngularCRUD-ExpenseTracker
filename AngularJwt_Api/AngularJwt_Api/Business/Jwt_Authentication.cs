using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace AngularJwt_Api.Business
{
    public class Jwt_Authentication
    {
        private static string Secret = "ERMN05OPLoDvbTTa/QkqLNMI7cPLguaRyHzyg7n5qNBVjQmtBhz4SzYh4NBVCXi3KJHlSXKP+oi2+bXr6CUYTR==";
        public static string GenerateToken(string username)
        {

            DateTime issuedAt = DateTime.UtcNow;
            DateTime expires = DateTime.UtcNow.AddDays(7);


            var tokenHandler = new JwtSecurityTokenHandler();

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[]
            {
                 new Claim(ClaimTypes.Name, "UserName"),
                new Claim(ClaimTypes.Email,"user@yopmail.com"),
                new Claim("DisplayName", "User"),
                new Claim(ClaimTypes.Role, "admin")
            });

            var now = DateTime.UtcNow;
            var securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(Secret));
            var signingCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(securityKey,
                Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature);


            var token =
                (JwtSecurityToken)
                 tokenHandler.CreateJwtSecurityToken(issuer: "http://localhost:51888", audience: "http://localhost:400",
                    subject: claimsIdentity, notBefore: issuedAt, expires: expires, signingCredentials: signingCredentials);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

    }
}