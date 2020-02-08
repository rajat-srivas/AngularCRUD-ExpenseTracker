import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './custom-components/expenses/expenses.component';
import { ExpenseItemComponent } from './custom-components/expense-item/expense-item.component';
import { PiechartComponent } from './custom-components/piechart/piechart.component';
import { BarchartComponent } from './custom-components/barchart/barchart.component';



const routes: Routes = [
  {path:"barChart", component:BarchartComponent},
  {path:"pieChart", component:PiechartComponent},
  {path:"home",component:ExpensesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
