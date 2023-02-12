import { Directive, HostListener } from '@angular/core';
import { AuthFacade } from '../state/auth.facade';

@Directive({
  selector: '[loginGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private authFacade: AuthFacade) { }

  @HostListener('click')
  onClick() {
    this.authFacade.googleLogin();
  }

}
