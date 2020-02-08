import { Injectable } from '@angular/core';
import { ExpenseModel } from './Expense.Model';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
//import {Response, RequestOptions, Headers } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { CategoryModel } from './Category.Model';
import { filter, map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  base_url = "http://localhost:51888/";
  expenses : ExpenseModel[];
  expenseItem : ExpenseModel = new ExpenseModel();

  constructor(private http: HttpClient) { }

  GetAllExpenses() : Observable<Object>
  {
  return this.http.get(this.base_url + "/expenses")
  }


  // GetAllExpenses()
  // {
  //  this.http.get(this.base_url + "/expenses").
  //   subscribe((response) =>
  //   this.expenses = response as ExpenseModel[])
  //  ;
  // }

  AddNewExpense(form: ExpenseModel){
    
    return this.http.post(this.base_url + "/addExpense", form).
    subscribe((response) => {
     this.GetAllExpenses();
      console.log("submit was completed");
    }
    );

  }

  UpdateExpense(form: ExpenseModel)
  {
    return this.http.put(this.base_url + "expenses", form)
              .subscribe((response)=> {
                this.GetAllExpenses();
              })
  }

 

  DeleteExpense(index: number)
  {
      
    this.http.delete(this.base_url  + "deleteExpense?exp=" + this.expenses[index].Id.toString()).
    subscribe((response) => {
     this.GetAllExpenses();
      console.log("submit was completed");
    }
    );
  }

}
