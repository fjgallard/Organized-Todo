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

  get currentUser() {
    return this.auth.currentUser;
  }

  googleLogin() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  emailLogin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  emailSignup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  passwordReset(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.auth.signOut();
  }
}
