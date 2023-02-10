import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { GoogleSigninDirective } from './directives/google-signin.directive';
import { GoogleSignoutDirective } from './directives/google-signout.directive';
import { EmailPassFormComponent } from './components/email-pass-form/email-pass-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class LoginModule { }
