import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

	constructor(private _http: HttpClient) { }

	getProductsData(){
		return this._http.get('http://localhost:9001/api/products');
	}

}
