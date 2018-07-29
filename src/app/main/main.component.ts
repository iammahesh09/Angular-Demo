import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainMenuComponent implements OnInit {
	isLoggedin: boolean;

	constructor(private _isLogin: LoginService, private _router: Router) { 
		this.isLoggedin = this._isLogin.isLoggedin()
	}

  	ngOnInit() {
	  	this._isLogin.isAuthenticated.subscribe(res => this.isLoggedin = res);
  	}

	userLogout() {
		localStorage.clear();
		this._router.navigate(['login'])
		this._isLogin.isAuthenticated.next(false);
	}
}
