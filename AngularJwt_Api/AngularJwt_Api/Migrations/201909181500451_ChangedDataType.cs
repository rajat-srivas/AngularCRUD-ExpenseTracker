namespace AngularJwt_Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedDataType : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ExpenseModels", "ExpenseAmount", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ExpenseModels", "ExpenseAmount", c => c.String());
        }
    }
}
