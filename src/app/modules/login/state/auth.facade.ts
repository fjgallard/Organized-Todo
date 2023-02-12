import { Injectable } from "@angular/core";
import { User } from "@core/services/auth/auth.interfaces";
import { AuthService } from "@core/services/auth/auth.service";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  private $currentUser: Subject<User> = new Subject<User>();

  currentUser$: Observable<User>;

  constructor(private authService: AuthService) {
    this.currentUser$ = this.$currentUser.asObservable();
  }

  /**
   * Returns the currently logged in user
   */
  //get currentUser$() {
  //  return this.authService.currentUser;
  //}

  loadCurrentUser() {
    this.authService.currentUser.subscribe((user: User) => {
      this.$currentUser.next(user);
    });
  }

  googleLogin() {
    return this.authService.googleLogin();
  }

  emailLogin(email: string, password: string) {
    return this.authService.emailLogin(email, password);
  }

  emailSignup(email: string, password: string) {
    return this.authService.emailSignup(email, password);
  }

  passwordReset(email: string) {
    return this.authService.passwordReset(email);
  }

  logout() {
    return this.authService.logout();
  }

}
