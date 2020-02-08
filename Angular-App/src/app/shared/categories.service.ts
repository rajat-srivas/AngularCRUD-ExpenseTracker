import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import {Response, RequestOptions, Headers } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { CategoryModel } from './Category.Model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

base_url = "http://localhost:51888/";

  constructor(private http: HttpClient) { }

GetCategories() 
{
  return this.http.get(this.base_url + "/categories");
}

}
