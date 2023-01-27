import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodoBoardComponent } from './components/todo-board/todo-board.component';


@NgModule({
  declarations: [
    TodoListComponent,
    DashboardComponent,
    TodoBoardComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
