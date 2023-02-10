import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthFirebaseService } from '@core/services/auth/auth-firebase.service';
import { SnackService } from '@core/services/snack/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authFirebaseService: AuthFirebaseService,
    private snackService: SnackService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const user = await this.authFirebaseService.currentUser;
    const isLoggedIn = !!user;

    if (!isLoggedIn) {
      this.snackService.authError();
    }

    return isLoggedIn;
  }

}
