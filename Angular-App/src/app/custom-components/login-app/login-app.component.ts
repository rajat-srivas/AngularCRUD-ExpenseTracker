import { LoginServiceService } from './../login-service.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginModel } from '../login-model';


@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {

  loginForm : FormGroup;
  loginmodel : LoginModel = new LoginModel();
  
  constructor(
    private formBuilder : FormBuilder,
    private loginService : LoginServiceService
  
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username : ['',Validators.required],
        password : ['',Validators.required]
      }
    );
  }

  get(key:string) : string
  {
    return this.loginForm.controls[key].value;
  }

  onSubmit() : void{
    console.log(this.loginForm.value);
    console.log(this.get('username'));
    console.log(this.get('password'));

   
    this.loginmodel.Username = this.get('username');
    this.loginmodel.Password = this.get('password');
    
    this.loginService.AuthenticateUser(this.loginmodel)
        .subscribe((response) => {
            console.log(response);
            localStorage.setItem('token', response.toString());
            sessionStorage.setItem('token', response.toString());
        })

  }

}
