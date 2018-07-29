import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

	constructor(private _http: HttpClient, private _loginService: LoginService) { }

	public productUrl = 'https://exp-rest-api.herokuapp.com/api/products/';




  getProductData(){

	  let _header = { 'authorization': this._loginService.getToken() }

	  return this._http.get(this.productUrl, { headers: _header })
  	}
  }


