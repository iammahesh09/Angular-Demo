import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private dataUrl = "http://localhost:9001/api/users/login/";

  constructor(private _http: HttpClient) { }

  login(loginData) {
    return this._http.post(this.dataUrl, loginData)
  }

  saveToken(token: string) {
    this.isAuthenticated.next(true);
    return localStorage.setItem("token", token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedin(): boolean {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this.isAuthenticated.next(false);
  }

  isAuthenticated: Subject<boolean> = new Subject();



}
