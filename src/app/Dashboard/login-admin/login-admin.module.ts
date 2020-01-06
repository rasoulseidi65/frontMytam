import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    LoginAdminRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ]
})
export class LoginAdminModule { }
