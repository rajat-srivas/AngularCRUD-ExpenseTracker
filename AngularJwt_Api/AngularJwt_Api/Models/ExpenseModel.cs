using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AngularJwt_Api.Models
{
    public class ExpenseModel
    {
        [Key]
        public int Id { get; set; }
        public decimal ExpenseAmount { get; set; }

        public DateTime? Date { get; set; }

        public int ExpenseCategory { get; set; }

        public string Notes { get; set; }

        [NotMapped]
        public string  CategoryName { get; set; }
    }
}