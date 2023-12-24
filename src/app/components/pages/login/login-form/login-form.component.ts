import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@/services/auth.service';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/local-storage';
import { ROUTES } from '@/types/routes';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginForm {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)]),
  });

  showPassword = false;

  constructor(private router: Router, private authService: AuthService) {}

  async login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    this.authService.login({ email: email!, password: password! }).subscribe(async ({ access_token, refresh_token }) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
      localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);

      await this.router.navigate([ROUTES.HOME]);
    });

  }

  isEmailInvalid(): boolean {
    return this.loginForm.controls.email.touched && this.loginForm.controls.email.invalid;
  }

  getEmailError(): string | undefined {
    const errors = this.loginForm.controls.email.errors;

    if (errors?.['required']) return 'Please provide an email';

    if (errors?.['email']) return 'Please enter a valid email';

    return;
  }

  isPasswordValid(): boolean {
    return this.loginForm.controls.password.touched && this.loginForm.controls.password.invalid;
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
