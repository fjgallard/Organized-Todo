import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Board } from './board.interfaces';

const COLLECTION_NAME = 'boards';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor(private db: AngularFirestore) { }

  create(board: Board, user: User) {
    return this.db.collection<Board>(COLLECTION_NAME).add({
      ...board,
      uid: user.uid,
    });
  }

  read(id: string) {
    return this.db.doc<Board>(`${COLLECTION_NAME}/${id}`).valueChanges({ idField: 'id' });
  }

  update(board: Board) {
    if (!board?.id) {
      return;
    }

    return this.db.doc<Board>(`${COLLECTION_NAME}/${board.id}`).update({...board});
  }

  delete(id: string) {
    return this.db.doc<Board>(`${COLLECTION_NAME}/${id}`).delete();
  }
}
