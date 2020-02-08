using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AngularJwt_Api.Models;
using AngularJwt_Api.Business;
using System.Net.Http;
using System.Net;
using System.Text;
using System.Web.Http.Cors;

namespace AngularJwt_Api.Controllers
{
 
    [EnableCors("*","*","*")]
    public class LoginController : ApiController
    {
        [HttpPost]
        [AllowAnonymous]
        public IHttpActionResult Authenticate([FromBody]LoginModel login)
        {
            bool isUsernamePasswordValid = false;

            if (login != null)
                isUsernamePasswordValid = login.Password == "admin" ? true : false;

            if (isUsernamePasswordValid)
            {
                string token = Jwt_Authentication.GenerateToken(login.Username);
             
                return Ok<string>(token);
            }
            else
            {
                return BadRequest("Login failed, invalid Username or Password.");
            }
        }

        [AuthorizeJwt]
        [HttpGet]
        public HttpResponseMessage GetSecureValues()
        {
            return this.Request.CreateResponse(HttpStatusCode.OK,
                        new { content = "Secure Content Returned" });
        }
    }
}