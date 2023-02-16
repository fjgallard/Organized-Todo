import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { BoardComponent } from './components/board/board.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';
import { BoardDialogComponent } from './components/board-dialog/board-dialog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BoardComponent,
    TaskDialogComponent,
    BoardDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    SharedModule,
  ]
})
export class TodoModule { }
