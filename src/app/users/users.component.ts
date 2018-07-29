import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: any;
	userDetail: any;

	constructor(private _userService: UsersService) { }

  	ngOnInit() {
		this._userService.getUserData().subscribe(
			resp => this.users = resp,
			error => console.log("Error")
		)
  	}

}
