import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ShellModule } from 'src/app/containers/shell/shell.module';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,

    ShellModule
  ]
})
export class LandingModule { }
