import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board, Task } from '@core/services/board/board.interfaces';
import { BoardFacade } from '@modules/todo/state/board.facade';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Output()
  onDelete = new EventEmitter<string>();

  @Input()
  board!: Board;

  constructor(
    private boardFacade: BoardFacade,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  taskDrop(event: CdkDragDrop<string[]>) {
    if (!this.board?.tasks) {
      return;
    }

    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardFacade.updateTasks(this.board, this.board.tasks);
  }

  openDialog(task?: Task, idx?: number): void {
    const newTask = { label: 'purple' };
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx }
        : { task: newTask, isNew: true }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      const tasks = this.board?.tasks || [];
      if (!result) {
        return;
      }

      if (result.isNew) {
        this.boardFacade.updateTasks(this.board, [
          ...tasks,
          result.task
        ]);
      } else {
        const update = this.board.tasks || [];
        update.splice(result.idx, 1, result.task);
        this.boardFacade.updateTasks(this.board, tasks);
      }
    });
  }

  handleDelete() {
    this.onDelete.emit(this.board.id);
  }

}
