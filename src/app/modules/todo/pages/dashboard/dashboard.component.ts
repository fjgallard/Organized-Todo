import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board } from '@core/services/board/board.interfaces';
import { BoardDialogComponent } from '@modules/todo/components/board-dialog/board-dialog.component';
import { BoardFacade } from '@modules/todo/state/board.facade';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  boards: Board[] = [];

  private subs = new SubSink();

  constructor(
    private boardFacade: BoardFacade,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subs.sink = this.boardFacade.getUserBoards().subscribe(boards => {
      if (!boards) {
        return;
      }

      this.boards = boards;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardFacade.sortBoards(this.boards);
  }

  /**
   * TODO: Create DialogService for this
   */
  openBoardDialog(): void {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.boardFacade.createBoard({
          title: result,
          priority: this.boards.length
        });
      }
    });
  }

  deleteBoard(id: string) {
    this.boardFacade.deleteBoard(id);
  }

}
