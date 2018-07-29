import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

	isAuthenticated: Subject<boolean> = new Subject();

  	constructor(private _http:HttpClient) { }

  	checkLoginDetails(user){
	  	return this._http.post('https://exp-rest-api.herokuapp.com/api/users/login', user)
  	}

  	saveToken(token:string){
		this.isAuthenticated.next(true);
		localStorage.setItem("token", token);
  	}

  	getToken(){
  		return localStorage.getItem('token');
  	}

	isLoggedin(): boolean {
		return !!localStorage.getItem("token");
	}

	userLogout() {
		return localStorage.clear();
	}

	

}
