import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from '@/pages/login/login.page';
import { LoginForm } from '@/components/pages/login/login-form/login-form.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoginPage, LoginForm],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [LoginPage]
})
export class LoginModule { }
