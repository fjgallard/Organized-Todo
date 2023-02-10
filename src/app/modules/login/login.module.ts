import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { GoogleSigninDirective } from './directives/google-signin.directive';
import { GoogleSignoutDirective } from './directives/google-signout.directive';

@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    GoogleSignoutDirective,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,

    MatButtonModule,
  ]
})
export class LoginModule { }
