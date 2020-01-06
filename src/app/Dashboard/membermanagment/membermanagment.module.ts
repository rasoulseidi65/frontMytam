import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MembersComponent } from './membernew/members.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembermanagmentRoutingModule } from './membermanagment-routing.module';
import { ListmemberComponent } from './listmember/listmember.component';

@NgModule({
  declarations: [MembersComponent, ListmemberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MembermanagmentRoutingModule
  ]
})
export class MembermanagmentModule { }
