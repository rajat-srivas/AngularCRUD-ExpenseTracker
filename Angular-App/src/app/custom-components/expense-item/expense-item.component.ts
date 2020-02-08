import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from  '@angular/material';
import { ExpenseModel } from 'src/app/shared/Expense.Model';
import { CategoryModel } from './../../shared/Category.Model';
import { CategoriesService } from 'src/app/shared/categories.service';
import { NgForm } from '@angular/forms';
import { ExpensesService } from 'src/app/shared/expenses.service';
import { from } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css']
})
export class ExpenseItemComponent implements OnInit {

  formDataExpense : ExpenseModel = new ExpenseModel();
  fromDataCategory : CategoryModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef : MatDialogRef<ExpenseItemComponent>,
    private catService : CategoriesService,
    private expenseService : ExpensesService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {

    this.GetCategories();
    if(!isNullOrUndefined( this.data.expenseId))
    {
      console.log(this.expenseService.expenses[this.data.expenseId]);
      this.formDataExpense = Object.assign({},this.expenseService.expenses[this.data.expenseId]);
    }
     
  }
  closeModel()
  {
    this.dialogRef.close();
  }

  GetCategories()
  {
    this.catService.GetCategories()
    .subscribe((respose) => 
        this.fromDataCategory = respose as CategoryModel[]
    )
  }

  onSubmit(form:NgForm){
      console.log(form.value);

      if(!isNullOrUndefined( this.data.expenseId))
      {
          this.expenseService.UpdateExpense(form.value);
          this.toastr.info("Expense successfully updated","AEM" , {
            timeOut:2000
          });
      }
      else
      {
      this.expenseService.AddNewExpense(form.value);
      this.toastr.success("Expense successfully recorded","AEM" , {
        timeOut:2000
      });
      } 
      console.log("After Save");
      console.log(this.expenseService.expenses);
     
      this.closeModel();

  }

  CategorySelected(form)
  {
    if(form.selectedIndex == 0)
      this.formDataExpense.CategoryName = "";
    else{
      this.formDataExpense.CategoryName =this.fromDataCategory[form.selectedIndex -1].ExpenseCategory;
      console.log(this.formDataExpense.CategoryName);
    }
  }
}
