import { Injectable } from '@angular/core';
import { AuthApi } from '@api/firebase/auth/auth-firebase.api';
import { BoardsApi } from '@api/firebase/boards/boards.api';
import { of, switchMap } from 'rxjs';
import { Board, Task } from './board.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private authApi: AuthApi,
    private boardsApi: BoardsApi
  ) { }

  async createBoard(board: Board) {
    const user = await this.authApi.currentUser;
    if (!user?.uid) {
      console.error('Not logged in!');
      return;
    }

    return this.boardsApi.create(board, user?.uid);
  }

  getUserBoards() {
    return this.authApi.authState.pipe(
      switchMap(user => {
        if (!user?.uid) {
          console.error('Not logged in!');
          return of(undefined);
        }

        return this.boardsApi.getByUser(user?.uid);
      })
    )

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
