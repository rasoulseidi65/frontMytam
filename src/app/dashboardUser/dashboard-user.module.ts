import { CKEditorModule } from 'ckeditor4-angular';
import { ProfileComponent } from './profile-user/profile.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule, MatGridListModule, MatDatepickerModule, MatButtonModule, MatCardModule, MatRadioModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { SidebaruserComponent } from './sidebaruser/sidebaruser.component';
import { LayoutuserComponent } from './layoutuser/layoutuser.component';

@NgModule({
  declarations: [SidebaruserComponent, LayoutuserComponent,ProfileComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    DpDatePickerModule ,
    ChartsModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardUserRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    CKEditorModule
  ],
  exports: [SidebaruserComponent,LayoutuserComponent]
})
export class DashboardUserModule { }
