import { CKEditorModule } from 'ckeditor4-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentmanagmentRoutingModule } from './commentmanagment-routing.module';
import { CommentComponent } from './comment/comment.component';
import { CommentAnswerComponent } from './comment-answer/comment-answer.component';

@NgModule({
  declarations: [CommentComponent, CommentAnswerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    CommentmanagmentRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommentmanagmentModule { }
