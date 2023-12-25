import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPage } from '@/pages/register/register.page';
import { RegisterForm } from '@/components/pages/register/register-form/register-form.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RegisterPage, RegisterForm],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class RegisterModule { }
