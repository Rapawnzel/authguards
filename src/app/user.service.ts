import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _router: Router) { }

  dummyData = {"username": "Juan", "password": "secret"}

  login(username: string, password: string){
    if (
      username === this.dummyData["username"]
      &&
      password === this.dummyData["password"]
    ) {
      localStorage.setItem("token", "hola")

      this._router.navigateByUrl("/shoppingCart")

    } else {
      return false;
    }
  }

}
