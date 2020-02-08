using AngularJwt_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularJwt_Api.Controllers
{
    [Route("categories")]
    [EnableCors("*", "*", "*")]
    public class CategoryController : ApiController
    {
        AngularCrudDb dbContent = new AngularCrudDb();
        [HttpPost]
      
        public async Task<IHttpActionResult> AddNewCategory(CategoryModel category)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var id = await AddCategorytoDb(category);

            return Ok(id);
        }

        private Task<int> AddCategorytoDb(CategoryModel category)
        {
            dbContent.Categories.Add(category);
            dbContent.SaveChanges();

            return Task.FromResult(category.Id);
        }

        [HttpGet]
   
        public IHttpActionResult GetCategories()
        {
            var categories = dbContent.Categories.ToList();
            return Ok(categories);
        }
    }
}
