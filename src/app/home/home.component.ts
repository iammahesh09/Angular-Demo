import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	title = 'Angular';
	userError:string
	isError: boolean = true;
  	constructor() {}

  	ngOnInit() {}

  	users:any[]= ['Jhon', 'Lishe',"Hrend"]

	addUser(userValue) {

		if (userValue.value == ''){
			this.isError = false;
			this.userError = 'Please enter username';
			

		} else {
			this.isError = true;
			let userValueAS = userValue.value;
			console.log(`user '${userValueAS}' is Added`)
			this.users.push(userValueAS);

			userValue.value = '';
		}
	}

	removeUser(user){
		let currentUser = this.users.indexOf(user);
		console.log(`user '${user}' is Deleted`)
		this.users.splice(currentUser, 1)
	}



}
