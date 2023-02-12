import { Directive, HostListener } from '@angular/core';
import { AuthFacade } from '../state/auth.facade';

@Directive({
  selector: '[loginGoogleSignout]'
})
export class GoogleSignoutDirective {

  constructor(private authFacade: AuthFacade) { }

  @HostListener('click')
  onClick() {
    this.authFacade.logout();
  }
}
