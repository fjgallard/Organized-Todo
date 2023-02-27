import { Component } from '@angular/core';
import { User } from '@core/services/auth/auth.interfaces';
import { EmailPassFormType } from '@modules/login/interfaces/email-pass-form-types.enum';
import { AuthFacade } from '@modules/login/state/auth.facade';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  /**
   * Track currently logged in user or lack thereof
   */
  authState: Observable<User>;

  /**
   * If an action is currently in progress
   */
  isLoading: boolean = false;

  /**
   * Track if the user is currently in login, signup, or password reset mode
   */
  formType: EmailPassFormType;

  /**
   * Loads error message (unimplemented)
   */
  serverMessage: string = '';

  constructor(private authFacade: AuthFacade) {
    this.authFacade.loadCurrentUser();
    this.authState = this.authFacade.currentUser$;

    this.formType = EmailPassFormType.SIGNUP;
  }

  updateFormType(formType: EmailPassFormType) {
    this.formType = formType;
  }

  async submitForm(formValue: { email: string, password: string }) {
    this.isLoading = true;

    const { email, password } = formValue;
    const authFunction = this.authFacade.authFunction(this.formType);

    await authFunction(email, password);

    this.isLoading = false;
  }

}
