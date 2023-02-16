import { Injectable } from "@angular/core";
import { Board, Task } from "@core/services/board/board.interfaces";
import { BoardService } from "@core/services/board/board.service";

@Injectable({
  providedIn: 'root'
})
export class BoardFacade {

  constructor(private boardService: BoardService) {
  }

  createBoard(board: Board) {
    return this.boardService.createBoard(board);
  }

  getUserBoards() {
    return this.boardService.getUserBoards();
  }

  sortBoards(boards: Board[]) {
    return this.boardService.sortBoards(boards);
  }

  updateTasks(board: Board, tasks: Task[]) {
    return this.boardService.updateTasks(board, tasks);
  }

  removeTask(id: string, task: Task) {
    return this.boardService.removeTask(id, task);
  }

  deleteBoard(id: string) {
    return this.boardService.deleteBoard(id);
  }
}
