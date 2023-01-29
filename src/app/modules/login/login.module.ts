import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoreModule } from '@core/core.module';
import { ShellModule } from 'src/app/shared/shell/shell.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShellModule
  ]
})
export class LoginModule { }
