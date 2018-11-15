import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Login } from './login/login.component';
import { Register } from './register/register.component';
import { Forgot } from './forgot/forgot.component';
import { Home } from './home/home.component';
import { ChangePwd } from './changepwd/change.component';
import { Query } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Register,
    Forgot,
    Home,
    ChangePwd,
    Query
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
