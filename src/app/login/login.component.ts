import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _user: any = {};
  failed: boolean;

  constructor(private _loginService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    console.log(this._user);
    this._loginService.login(this._user).subscribe(
      res => {
        this._loginService.saveToken(res["token"]);
        this._router.navigate(["/welcome"]);
      },
      err => this.failed = true
    )
  }

}
