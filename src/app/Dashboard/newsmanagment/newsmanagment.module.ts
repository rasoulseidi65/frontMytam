import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './newsNew/news.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsmanagmentRoutingModule } from './newsmanagment-routing.module';
import { ListnewsComponent } from './listnews/listnews.component';
import { MatRadioModule } from '@angular/material';
import { CKEditorModule } from 'ckeditor4-angular';
import { NewsupdateComponent } from './newsupdate/newsupdate.component';

@NgModule({
  declarations: [ListnewsComponent,NewsComponent, NewsupdateComponent],
  imports: [
    CommonModule,
    DpDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    NewsmanagmentRoutingModule,
    CKEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsmanagmentModule { }
