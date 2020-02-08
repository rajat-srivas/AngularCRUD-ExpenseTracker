namespace AngularJwt_Api
{
    using System;
    using System.Data.Entity;
    using System.Linq;
    using AngularJwt_Api.Models;

    public class AngularCrudDb : DbContext
    {
        // Your context has been configured to use a 'AngularCrudDb' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'AngularJwt_Api.AngularCrudDb' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'AngularCrudDb' 
        // connection string in the application configuration file.
        public AngularCrudDb()
            : base("name=AngularCrudDb")
        {

        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        public virtual DbSet<LoginModel> Login { get; set; }

        public virtual DbSet<ExpenseModel> Expenses { get; set; }
        public virtual DbSet<CategoryModel> Categories { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}