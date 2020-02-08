using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularJwt_Api.Models
{
    public class LoginModel
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public string Roles { get; set; }

        public DateTime? DOB { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}