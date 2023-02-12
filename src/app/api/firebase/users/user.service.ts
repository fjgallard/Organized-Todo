import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './user.interfaces';

const COLLECTION_NAME = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  create(user: User) {
    return this.db.collection<User>(COLLECTION_NAME).add({
      ...user,
    });
  }

  read(id: string) {
    return this.db.doc<User>(`${COLLECTION_NAME}/${id}`).valueChanges({ idField: 'id' });
  }

  update(user: User) {
    if (!user?.id) {
      return;
    }

    return this.db.doc<User>(`${COLLECTION_NAME}/${user.id}`).update({...user});
  }

  delete(id: string) {
    return this.db.doc<User>(`${COLLECTION_NAME}/${id}`).delete();
  }
}
