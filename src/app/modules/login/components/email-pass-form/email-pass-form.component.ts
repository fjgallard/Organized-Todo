import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailPassFormType } from '@modules/login/interfaces/email-pass-form-types.enum';
import { AuthFacade } from '@modules/login/state/auth.facade';

@Component({
  selector: 'login-email-pass-form',
  templateUrl: './email-pass-form.component.html',
  styleUrls: ['./email-pass-form.component.scss']
})
export class EmailPassFormComponent implements OnInit {

  form: FormGroup;

  type: EmailPassFormType = EmailPassFormType.SIGNUP;
  isLoading = false;

  serverMessage: string = '';

  readonly LOGINTYPE = EmailPassFormType.LOGIN;
  readonly SIGNUPTYPE = EmailPassFormType.SIGNUP;
  readonly RESETTYPE = EmailPassFormType.RESET;

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {
    this.form = this.buildForm();
  }

  ngOnInit() {}

  get isLogin() {
    return this.type === EmailPassFormType.LOGIN;
  }

  get isSignup() {
    return this.type === EmailPassFormType.SIGNUP;
  }

  get isPasswordReset() {
    return this.type === EmailPassFormType.RESET;
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    if (this.type !== EmailPassFormType.SIGNUP) {
      return true;
    } else {
      return this.password?.value === this.passwordConfirm?.value;
    }
  }

  changeType(val: EmailPassFormType) {
    this.type = val;
  }

  async onSubmit() {
    this.isLoading = true;

    const email = this.email?.value;
    const password = this.password?.value;

    try {
      if (this.isLogin) {
        await this.authFacade.emailLogin(email, password);
      }
      if (this.isSignup) {
        await this.authFacade.emailSignup(email, password);
      }
      if (this.isPasswordReset) {
        await this.authFacade.passwordReset(email);
        this.serverMessage = 'Check your email';
      }
    } catch (err) {
      this.serverMessage = err as string;
    }

    this.isLoading = false;
  }

  private buildForm() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ],
      passwordConfirm: ['', []]
    });
  }

}
