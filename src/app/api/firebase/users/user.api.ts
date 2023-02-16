import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './user.interfaces';

const COLLECTION_NAME = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  constructor(private db: AngularFirestore) { }

  create(user: User) {
    return this.db.collection<User>(COLLECTION_NAME).add({
      ...user,
    });
  }

  read(id: string) {
    return this.db.doc<User>(`${COLLECTION_NAME}/${id}`).valueChanges({ idField: 'id' });
  }

  update(id: string, user: User) {
    if (!id) {
      return;
    }

    return this.db.doc<User>(`${COLLECTION_NAME}/${id}`).update({...user});
  }

  delete(id: string) {
    return this.db.doc<User>(`${COLLECTION_NAME}/${id}`).delete();
  }
}
