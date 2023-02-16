import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board } from '@core/services/board/board.interfaces';
import { BoardDialogComponent } from '@modules/todo/components/board-dialog/board-dialog.component';
import { BoardFacade } from '@modules/todo/state/board.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  boards: Board[] = [];

  constructor(
    private boardFacade: BoardFacade,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // Add subsink later
    this.boardFacade
      .getUserBoards()
      .subscribe(boards => {
        console.log(boards);
        if (!boards) {
          return;
        }

        this.boards = boards;
      });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardFacade.sortBoards(this.boards);
  }

  openBoardDialog(): void {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
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
