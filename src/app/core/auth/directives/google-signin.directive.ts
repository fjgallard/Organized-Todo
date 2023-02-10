import { Directive, HostListener } from '@angular/core';
import { AuthFirebaseService } from '../services/auth-firebase.service';

@Directive({
  selector: '[loginGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private authFire: AuthFirebaseService) { }

  @HostListener('click')
  onClick() {
    console.log('haha');
    this.authFire.login().then(res => console.log(res));
  }

}
