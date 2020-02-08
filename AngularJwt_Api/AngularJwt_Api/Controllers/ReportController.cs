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
    [Route("reports")]
    [EnableCors("*", "*", "*")]
    public class ReportController : ApiController
    {
        AngularCrudDb dbContent = new AngularCrudDb();

        [HttpGet]
        [Route("getExpPerCat")]
        public List<PieChartModel> GetExpensesPerCategory()
        {
            var expenses = (from exp in dbContent.Expenses
                            join cat in dbContent.Categories
                            on exp.ExpenseCategory equals cat.Id
                            group exp by cat.ExpenseCategory into groupData
                            select new PieChartModel
                            {
                                Category = groupData.Key,
                                Amount = groupData.Sum(x => x.ExpenseAmount)
                            }
                            ).ToList();

            return expenses;
        }

        [HttpGet]
        [Route("getExpPerMonth")]
        public List<BarChartModel> GetExpensesPerMonth()
        {
            var expenses = (from exp in dbContent.Expenses
                            group exp by new { month = exp.Date.Value.Month } into groupData
                            select new BarChartModel
                            {
                                Month = groupData.Key.month.ToString(),
                                Amount = groupData.Sum(x => x.ExpenseAmount)
                            }
                            ).ToList();

            return expenses;
        }
       
    }
}
