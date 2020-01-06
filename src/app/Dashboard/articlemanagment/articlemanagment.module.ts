import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlemanagmentRoutingModule } from './articlemanagment-routing.module';
import { ArticleComponent } from './article/article.component';
import { ListarticleComponent } from './listarticle/listarticle.component';
import { ArticleupdateComponent } from './articleupdate/articleupdate.component';

@NgModule({
  declarations: [ArticleComponent, ListarticleComponent, ArticleupdateComponent],
  imports: [
    DpDatePickerModule,
    CommonModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    ArticlemanagmentRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArticlemanagmentModule { }
