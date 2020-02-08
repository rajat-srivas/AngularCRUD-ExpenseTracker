using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using AngularJwt_Api.Models;


namespace AngularJwt_Api.Controllers
{
    [EnableCors("*", "*", "*")]

    [Route("expenses")]
    public class ExpenseController : ApiController
    {
        AngularCrudDb dbContent = new AngularCrudDb();

        [HttpGet]
        public IHttpActionResult GetExpenses()
        {
            var expenses = dbContent.Expenses.ToList();
            var categories = dbContent.Categories.ToList(); 

            foreach(var exp in expenses)
            {
                var category = dbContent.Categories.FirstOrDefault(x => x.Id == exp.ExpenseCategory);
                exp.CategoryName = category.ExpenseCategory;
            }
            
            return Ok(expenses);
        }


        [HttpPost]
        [Route("addExpense")]
        public async Task<IHttpActionResult> AddNewExpense(ExpenseModel expense)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var id = await AddExpensetoDb(expense);

            return Ok(id);
        }

        [HttpGet]
        [Route("expenseById")]
        public IHttpActionResult GetExpensesById(int id)
        {
            var expenses = dbContent.Expenses.FirstOrDefault(x => x.Id == id);
            return Ok(expenses);
        }


        public Task<int> AddExpensetoDb(ExpenseModel expense)
        {
            dbContent.Expenses.Add(expense);
            dbContent.SaveChanges();

            return Task.FromResult(expense.Id);
        }

      

        [HttpPut]
        public async Task<IHttpActionResult> UpdateExpenses(ExpenseModel expToUpdate)
        {
            var response = await UpdateExpense(expToUpdate);
            return Ok(response);

        }

        private Task<ExpenseModel> UpdateExpense(ExpenseModel expToUpdate)
        {
            try
            {
                var expense = dbContent.Expenses.FirstOrDefault(x => x.Id == expToUpdate.Id);
                if (expense == null)
                {
                    throw new Exception("Expense not found !!");
                }

               // expense = expToUpdate;
                //dbContent.Expenses.Attach(expense);
                //dbContent.Entry(expense).State = System.Data.Entity.EntityState.Modified;

                dbContent.Entry(expense).CurrentValues.SetValues(expToUpdate);

                dbContent.SaveChanges();
                return Task.FromResult(expToUpdate);
            }
            catch (Exception ex)
            {
                throw new Exception("Something went wrong!!");
            }
        }

        [HttpDelete]
        [Route("deleteExpense")]
        public IHttpActionResult DeleteExpense(string exp)
        {
            try
            {
                int expId = Convert.ToInt32(exp.Trim());
                var expense = dbContent.Expenses.FirstOrDefault(x => x.Id == expId);
                if (expense == null)
                {
                    throw new Exception("Expense not found!!");
                }

                dbContent.Expenses.Remove(expense);
                dbContent.SaveChanges();
                return Ok("Expense deleted successfully");
            }
            catch(Exception ex)
            {
                throw new Exception("Something went wrong!!");
            }
        }
    }
}
