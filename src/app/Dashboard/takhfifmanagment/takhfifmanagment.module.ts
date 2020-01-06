import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TakhfifnewComponent } from './takhfifnew/takhfifnew.component';
import { ListTakhfifComponent } from './list-takhfif/list-takhfif.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakhfifmanagmentRoutingModule } from './takhfifmanagment-routing.module';
import { MatSelectModule, MatDatepickerModule, MatRadioModule } from '@angular/material';
import {  DateAdapter,  MAT_DATE_FORMATS,  MAT_DATE_LOCALE } from "@angular/material";
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from "../../shared/material.persian-date.adapter";
import { TakhfifupdateComponent } from './takhfifupdate/takhfifupdate.component';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';

@NgModule({
  declarations: [TakhfifnewComponent, ListTakhfifComponent, TakhfifupdateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    DpDatePickerModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TakhfifmanagmentRoutingModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ],
})
export class TakhfifmanagmentModule { }
