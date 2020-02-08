namespace AngularJwt_Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FirstRun : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CategoryModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ExpenseCategory = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ExpenseModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ExpenseAmount = c.String(),
                        Date = c.DateTime(),
                        ExpenseCategory = c.Int(nullable: false),
                        Notes = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.LoginModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Password = c.String(),
                        Roles = c.String(),
                        DOB = c.DateTime(),
                        Email = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.LoginModels");
            DropTable("dbo.ExpenseModels");
            DropTable("dbo.CategoryModels");
        }
    }
}
