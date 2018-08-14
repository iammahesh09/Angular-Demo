import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-remove',
  templateUrl: './add-edit-remove.component.html',
  styleUrls: ['./add-edit-remove.component.css']
})
export class AddEditRemoveComponent implements OnInit {
  _user = {
    username: '',
    email: '',
    phone: ''
  };
  hiddenForm: boolean = true;
  title: string = "Add Edit Delete Data"
  showResult: string;
  userError: string
  isError: boolean = true;
  addUserBth: boolean = false;
  addBtn: boolean = false;
  updateBtn: boolean = true;
  constructor() { }

  ngOnInit() { }

  users: any[] = [
    { username: "Mahesh Chejarla", email: "mahesh@gmail.com", phone: 9908996668 },
    { username: "Leanne Graham", email: "Sincere@april.biz", phone: 9845465498 }

  ]

  addUserButton() {
    this._user = {
      username: '',
      email: '',
      phone: ''
    };
    this.hiddenForm = false;
    this.addUserBth = true;
  }

  addUser() {
    this.users.push(this._user);
    this.showResult = `User '${this._user['username']}' is added`;
    this.hiddenForm = true;
  }

  removeUser(user) {
    this.addUserBth = false;
    this.hiddenForm = true;
    this.addBtn = false;
    this.updateBtn = true;
    let currentUser = this.users.indexOf(user);
    this.showResult = `User '${user.username}' is deleted`;
    this.users.splice(currentUser, 1)
  }

  editUser(user) {
    this._user = user;
    this.addBtn = true;
    this.updateBtn = false;
    this.addUserBth = true;
    this.hiddenForm = false;
  }

  updateUser() {
    this.addUserBth = false;
    this.hiddenForm = true;
    this.updateBtn = true;
    this.addBtn = false;
  }


}

