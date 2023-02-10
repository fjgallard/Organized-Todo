import { Directive, HostListener } from '@angular/core';
import { AuthFirebaseService } from '../services/auth-firebase.service';

@Directive({
  selector: '[loginGoogleSignout]'
})
export class GoogleSignoutDirective {

  constructor(private authFire: AuthFirebaseService) { }

  @HostListener('click')
  onClick() {
    this.authFire.logout();
  }
}
