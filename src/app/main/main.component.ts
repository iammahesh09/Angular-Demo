import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  title = 'Angular';

  isLoggedin: boolean;

  constructor(private _loginService: AuthService, private _router: Router) {

    //this.isLoggedin = this._loginService.isLoggedin();

  }


  onLogout() {
    this._loginService.logout();
    this._router.navigate(["login"]);
  }

  ngOnInit() {
    this._loginService.isAuthenticated.subscribe(res => this.isLoggedin = res);
  }

}
