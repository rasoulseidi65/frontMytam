import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  declarations: [UserRegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
  ]
})
export class RegisterModule { }
