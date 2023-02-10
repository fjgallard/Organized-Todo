import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ShellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ShellComponent,
  ]
})
export class CoreModule { }
