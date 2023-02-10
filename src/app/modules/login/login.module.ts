import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ShellModule } from 'src/app/shared/shell/shell.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from '@core/auth/auth.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,

    AuthModule,
    ShellModule,

    MatButtonModule,
  ]
})
export class LoginModule { }
