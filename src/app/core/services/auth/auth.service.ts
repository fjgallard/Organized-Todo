import { Injectable } from '@angular/core';
import { AuthFirebaseService } from '@api/firebase/auth/auth-firebase.api';
import { UserService } from '@api/firebase/users/user.api';
import { map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authFire: AuthFirebaseService,
    private userService: UserService
  ) { }

  get currentUser() {
    return this.authFire.authState.pipe(
      switchMap(user => {
        if (!user) {
          return of(undefined);
        }

        return this.userService.read(user?.uid);
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
    return this.authFire.googleLogin();
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
