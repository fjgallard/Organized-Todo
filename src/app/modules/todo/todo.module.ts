import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodoBoardComponent } from './components/todo-board/todo-board.component';
import { ShellModule } from 'src/app/containers/shell/shell.module';


@NgModule({
  declarations: [
    DashboardComponent,
    TodoBoardComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,

    ShellModule
  ]
})
export class TodoModule { }
