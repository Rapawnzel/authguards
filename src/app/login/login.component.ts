import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public _user: UserService) { }

  login(){
    let username = (<HTMLInputElement>document.querySelectorAll('.username')[0]).value
    let password = (<HTMLInputElement>document.querySelectorAll('.password')[0]).value
    this._user.login(username, password)
  }

}
