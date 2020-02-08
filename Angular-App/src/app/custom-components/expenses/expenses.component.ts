import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/shared/expenses.service';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExpenseItemComponent } from './../expense-item/expense-item.component';
import { ExpenseModel } from 'src/app/shared/Expense.Model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  asyncPipeExpenses$ : Observable<Object>;

  constructor(private expenseService : ExpensesService,
    private dialog : MatDialog,
    private toastr : ToastrService
    ) { }

  ngOnInit() {
    
    this.asyncPipeExpenses$ = this.expenseService.GetAllExpenses();
    console.log(this.asyncPipeExpenses$);
    console.log("rajat")
  }


   resetExpenseGrid()
   {
     this.expenseService.expenses = [];
   }

 
   
   addEditExpenseItem(expenseId? : number)
   {
     console.log(expenseId);
     
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = "50%";
        dialogConfig.data = {
          expenseId 
        };
        this.dialog.open(ExpenseItemComponent,dialogConfig)
      
   }

   DeleteItem(index : number)
   {
     this.expenseService.DeleteExpense(index);
     this.toastr.success("Expense successfully deleted", "AEM", {
       timeOut:2000
     })
   }

   
}
