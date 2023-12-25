import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PASSWORD_REGEX } from '@/constants/form';
import { AuthService } from '@/services/auth.service';
import { ROUTES } from '@/types/routes';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginForm {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX),
    ]),
  });

  showPassword = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    this.authService
      .login({ email: email!, password: password! })
      .subscribe(async () => {
        await this.router.navigate([ROUTES.HOME]);
      });
  }

  isEmailInvalid(): boolean {
    return (
      this.loginForm.controls.email.touched &&
      this.loginForm.controls.email.invalid
    );
  }

  getEmailError(): string | undefined {
    const errors = this.loginForm.controls.email.errors;

    if (errors?.['required']) return 'Please provide an email';

    if (errors?.['email']) return 'Please enter a valid email';

    return;
  }

  isPasswordValid(): boolean {
    return (
      this.loginForm.controls.password.touched &&
      this.loginForm.controls.password.invalid
    );
  }

  getPasswordError(): string | undefined {
    const errors = this.loginForm.controls.password.errors;

    if (errors?.['required']) return 'Please enter a password';

    if (errors?.['pattern']) return 'Enter valid password';

    return;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
