import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(private auth: AngularFireAuth) { }

  get authState() {
    return this.auth.authState;
  }

  login() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.auth.signOut();
  }
}
