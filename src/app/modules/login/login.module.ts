import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { GoogleSigninDirective } from './directives/google-signin.directive';
import { GoogleSignoutDirective } from './directives/google-signout.directive';
import { EmailPassFormComponent } from './components/email-pass-form/email-pass-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    GoogleSignoutDirective,
    EmailPassFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }
