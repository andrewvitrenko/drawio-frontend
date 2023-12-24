import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { PASSWORD_REGEX } from '@/constants/form';
import { AuthService } from '@/services/auth.service';
import { Router } from '@angular/router';
import { RegisterPayload } from '@/types/api/auth';
import { ROUTES } from '@/types/routes';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterForm {
  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)]),
  }, { validators: this.confirmPasswordValidator });

  showPassword = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  register() {
    if (this.form.invalid) return;

    const { email, password, name } = this.form.value;

    const payload: RegisterPayload = {
      email: email!,
      password: password!,
      name: name || undefined,
    };

    this.authService.register(payload).subscribe(async () => {
      await this.router.navigate([ROUTES.HOME]);
    })
  }

  isEmailInvalid(): boolean {
    return this.form.controls.email.invalid;
  }

  getEmailError(): string | null {
    const errors = this.form.controls.email.errors;

    if (errors?.['required']) return 'Email is required';

    if (errors?.['email']) return 'Enter valid email';

    return null;
  }

  isPasswordInvalid(): boolean {
    return this.form.controls.password.invalid;
  }

  isConfirmPasswordInvalid(): boolean {
    return this.form.controls.confirmPassword.invalid;
  }

  getPasswordError(): string | null {
    const control = this.form.controls.password;

    if (control.hasError('required')) return 'Password is required';

    if (control.hasError('pattern')) return 'Enter valid password';

    if (control.hasError('passwordMismatch')) return 'Passwords do not match';

    return null;
  }

  getConfirmPasswordError(): string | null {
    const control = this.form.controls.confirmPassword;

    if (control.hasError('required')) return 'Password is required';

    if (control.hasError('pattern')) return 'Enter valid password';

    if (control.hasError('passwordMismatch')) return 'Passwords do not match';

    return null;
  }

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    const passwordErrors = password?.errors;
    const confirmPasswordErrors = confirmPassword?.errors;

    if (password?.value && confirmPassword?.value && password.value !== confirmPassword.value) {

      const error = { 'passwordMismatch': true };

      confirmPassword?.setErrors({ ...confirmPasswordErrors, ...error });
      password?.setErrors({ ...passwordErrors, ...error });

      return error;
    }

    if (passwordErrors) {
      delete passwordErrors['passwordMismatch'];
      password?.setErrors(Object.keys(passwordErrors).length ? passwordErrors : null);
    }

    if (confirmPasswordErrors) {
      delete confirmPasswordErrors['passwordMismatch'];
      confirmPassword?.setErrors(Object.keys(confirmPasswordErrors).length ? confirmPasswordErrors : null);
    }
    return null;
  }
}
