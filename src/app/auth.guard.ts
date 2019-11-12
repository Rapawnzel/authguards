import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(public _router: Router){}

  canActivate(){
    if(localStorage.getItem("token") === "hola"){
      return true
    } else {
      this._router.navigateByUrl("/login")

      return false;
    }
  }
  
}
