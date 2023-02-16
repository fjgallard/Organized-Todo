import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Board, Task } from './board.interfaces';

import firebase from 'firebase/compat/app';

const COLLECTION_NAME = 'boards';

@Injectable({
  providedIn: 'root'
})
export class BoardsApi{

  constructor(private db: AngularFirestore) { }

  getByUser(uid: string) {
    return this.db.collection<Board>(COLLECTION_NAME,
      ref => ref.where('uid', '==', uid).orderBy('priority')
    )
    .valueChanges({ idField: 'id' });
  }

  create(board: Board, uid: string) {
    return this.db.collection<Board>(COLLECTION_NAME).add({
      ...board,
      uid,
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

  updateAll(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('boards').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit();
  }

  delete(id: string) {
    return this.db.doc<Board>(`${COLLECTION_NAME}/${id}`).delete();
  }

  /**
   * Remove a specifc task from the board
   */
  removeTask(boardId: string, task: Task) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task)
      });
  }
}
