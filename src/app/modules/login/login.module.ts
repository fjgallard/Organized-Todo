import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ShellModule } from 'src/app/shared/shell/shell.module';
import { GoogleSigninDirective } from './directives/google-signin.directive';


@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShellModule
  ]
})
export class LoginModule { }
