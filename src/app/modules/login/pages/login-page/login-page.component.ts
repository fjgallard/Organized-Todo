import { Component } from '@angular/core';
import { EmailPassFormType } from '@modules/login/interfaces/email-pass-form-types.enum';
import { AuthFacade } from '@modules/login/state/auth.facade';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  authState: Observable<any>;
  isLoading: boolean = false;
  formType: EmailPassFormType = EmailPassFormType.SIGNUP;
  serverMessage: string = '';

  constructor(private authFacade: AuthFacade) {
    this.authFacade.loadCurrentUser();
    this.authState = this.authFacade.currentUser$;
  }

  updateFormType(formType: EmailPassFormType) {
    this.formType = formType;
  }

  async submitForm(formValue: { email: string, password: string }) {
    this.isLoading = true;

    const { email, password } = formValue;
    const authFunction = this.authFacade.authFunction(this.formType);

    try {
      return await authFunction(email, password);
    } catch (err) {
      this.serverMessage = err as string;
    }

    this.isLoading = false;
  }

}
