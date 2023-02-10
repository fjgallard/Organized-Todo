import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodoBoardComponent } from './components/todo-board/todo-board.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    TodoBoardComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
  ]
})
export class TodoModule { }
