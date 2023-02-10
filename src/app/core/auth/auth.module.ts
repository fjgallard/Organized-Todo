import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninDirective } from './directives/google-signin.directive';
import { GoogleSignoutDirective } from './directives/google-signout.directive';

@NgModule({
  declarations: [
    GoogleSigninDirective,
    GoogleSignoutDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GoogleSigninDirective,
    GoogleSignoutDirective,
  ],
})
export class AuthModule { }
