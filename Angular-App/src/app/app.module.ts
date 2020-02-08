import { LoginServiceService } from './custom-components/login-service.service';
import { LoginModel } from './custom-components/login-model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAppComponent } from './custom-components/login-app/login-app.component';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavBarComponent } from './custom-components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesComponent } from './custom-components/expenses/expenses.component';
import { ExpenseItemComponent } from './custom-components/expense-item/expense-item.component';
import {MatDialogModule} from '@angular/material/dialog';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatNativeDateModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';

import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { BarchartComponent } from './custom-components/barchart/barchart.component';
import { PiechartComponent } from './custom-components/piechart/piechart.component';;


@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    NavBarComponent,
    ExpensesComponent,
    ExpenseItemComponent,
    BarchartComponent,
    PiechartComponent,
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule ,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
 
    MatTooltipModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  entryComponents:[ExpenseItemComponent],
  exports:[MatDatepickerModule],
  providers: [LoginModel, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
