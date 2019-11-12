import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';

import {RouterModule, Routes} from '@angular/router'
import { AuthGuard } from './auth.guard';

let config: Routes = [
  {
    "path": "shoppingCart", 
    "component": ShoppingcartComponent, 
    "canActivate": [AuthGuard]
  },
  {"path": "login", "component": LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(config, {useHash: true})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
