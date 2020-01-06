import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideomanagmentRoutingModule } from './videomanagment-routing.module';
import { VideoComponent } from './video/video.component';
import { MatTableModule } from '@angular/material';
import { CKEditorModule } from 'ckeditor4-angular';
import { ListvideoComponent } from './listvideo/listvideo.component';
import { VideoupdateComponent } from './videoupdate/videoupdate.component';
@NgModule({
  declarations: [VideoComponent, ListvideoComponent, VideoupdateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule, CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    VideomanagmentRoutingModule
  ]
})
export class VideomanagmentModule { }
