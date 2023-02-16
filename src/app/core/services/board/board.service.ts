import { Injectable } from '@angular/core';
import { Board, Task } from '@api/firebase/boards/board.interfaces';
import { BoardsApi } from '@api/firebase/boards/boards.api';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private boardsApi: BoardsApi) { }

  createBoard(board: Board, uid: string) {
    return this.boardsApi.create(board, uid);
  }

  getUserBoards(uid: string) {
    return this.boardsApi.getByUser(uid);
  }

  sortBoards(boards: Board[]) {
    return this.boardsApi.updateAll(boards);
  }

  updateTasks(board: Board, tasks: Task[]) {
    const newBoard = { ...board, tasks };
    return this.boardsApi.update(newBoard);
  }

  removeTask(id: string, task: Task) {
    return this.boardsApi.removeTask(id, task);
  }

  deleteBoard(id: string) {
    return this.boardsApi.delete(id);
  }
}
