import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailPassFormType } from '@modules/login/interfaces/email-pass-form-types.enum';

@Component({
  selector: 'login-email-pass-form',
  templateUrl: './email-pass-form.component.html',
  styleUrls: ['./email-pass-form.component.scss']
})
export class EmailPassFormComponent {

  @Output()
  formTypeChanged = new EventEmitter<EmailPassFormType>();

  @Output()
  formSubmitted = new EventEmitter<{ email: string, password: string }>();

  @Input()
  serverMessage: string = '';

  @Input()
  type: EmailPassFormType = EmailPassFormType.SIGNUP;

  @Input()
  isLoading: boolean = false;

  form: FormGroup;

  readonly LOGINTYPE = EmailPassFormType.LOGIN;
  readonly SIGNUPTYPE = EmailPassFormType.SIGNUP;
  readonly RESETTYPE = EmailPassFormType.RESET;

  constructor(private fb: FormBuilder) {
    this.form = this.buildForm();
  }

  get isLogin() {
    return this.type === EmailPassFormType.LOGIN;
  }

  get isSignup() {
    return this.type === EmailPassFormType.SIGNUP;
  }

  get isPasswordReset() {
    return this.type === EmailPassFormType.RESET;
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

  get passwordConfirmField() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    return this.type !== EmailPassFormType.SIGNUP || this.passwordField?.value === this.passwordConfirmField?.value;
  }

  emitChangeType(val: EmailPassFormType) {
    this.formTypeChanged.emit(val);
  }

  async onSubmitBtnPressed() {
    const email = this.emailField?.value;
    const password = this.passwordField?.value;

    this.formSubmitted.next({ email, password });
  }

  private buildForm() {
    return this.fb.group({
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', [Validators.minLength(6), Validators.required] ],
      passwordConfirm: [' ', [] ]
    });
  }

}
