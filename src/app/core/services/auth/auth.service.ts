import { Injectable } from '@angular/core';
import { AuthApi } from '@api/firebase/auth/auth-firebase.api';
import { UserApi } from '@api/firebase/users/user.api';
import { map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authFire: AuthApi,
    private userApi: UserApi
  ) { }

  get currentUser() {
    return this.authFire.authState.pipe(
      switchMap(user => {
        if (!user) {
          return of(undefined);
        }

        return this.userApi.read(user?.uid);
      }),
      map(user => {
        return {
          id: user?.id,
          email: user?.email,
          displayName: user?.displayName
        }
      })
    );
  }

  get isLoggedIn(): Observable<boolean> {
    return this.currentUser.pipe(map(user => !!user?.id));
  }

  googleLogin() {
    this.authFire.googleLogin().then(res => {
      if (!res?.user) {
        return;
      }

      this.userApi.set(res.user);
    });
  }

  emailLogin(email: string, password: string) {
    return this.authFire.emailLogin(email, password);
  }

  emailSignup(email: string, password: string) {
    return this.authFire.emailSignup(email, password);
  }

  passwordReset(email: string) {
    return this.authFire.passwordReset(email);
  }

  logout() {
    return this.authFire.logout();
  }
}
