import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { SnackService } from '@core/services/snack/snack.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private snackService: SnackService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.authService.isLoggedIn.pipe(
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.snackService.authError();
        }

        return isLoggedIn;
      })
    );
  }

}
