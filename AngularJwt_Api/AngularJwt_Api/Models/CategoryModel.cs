using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularJwt_Api.Models
{
    public class CategoryModel
    {
        [Key]
        public int Id { get; set; }

        public string ExpenseCategory { get; set; }
    }
}