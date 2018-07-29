import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
	
	constructor(private _http: HttpClient) { }

	getUserData(){
		return this._http.get('https://jsonplaceholder.typicode.com/users')
	}

	getUserDetails(id: any) {
		return this._http.get('https://jsonplaceholder.typicode.com/users/' + id)
	}

}
