import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	userdetails: any;
	page_error: boolean;
	
	constructor(private _userService: UsersService, private _activatedRoute: ActivatedRoute) {

		let showUser: any = this._activatedRoute.snapshot.params.id

		this._userService.getUserDetails(showUser).subscribe(
			res => this.userdetails= res,
			eror => this.page_error = eror
		)
	}

  	ngOnInit() {
			
  	}

}
