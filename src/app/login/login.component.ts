import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	_user: any = {};
	isFailed: boolean;
	isSuces: boolean;
	
	constructor(
		private _userLoginService: LoginService, 
		private _router: Router, 
		private _route: ActivatedRoute) { }

  ngOnInit() {

  }

	userLogin(username, password){

		this._userLoginService.checkLoginDetails(this._user)
			.subscribe(
				resp => {
					this._userLoginService.saveToken(resp['token']),
					this._router.navigate(['products']),
					this.isSuces = true
				},	
				err => this.isFailed = true		
		)

	}

}
