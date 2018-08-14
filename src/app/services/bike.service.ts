import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from '../models/bike';
import { AuthService } from '../authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }


  private dataUrl = "http://localhost:9001/api/bikes/";

  getBikes() {
    let hder = { 'authorization': this._authService.getToken() };
    return this._http.get<Bike>(this.dataUrl, { headers: hder });
  }

  addBike() {

  }

  editBike() {

  }
  deleteBike() {

  }
}
