import { CommentAnswerComponent } from './comment-answer/comment-answer.component';
import { CommentComponent } from './comment/comment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path:"" , component: CommentComponent
},
{
  path:"commentAnswer" , component: CommentAnswerComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentmanagmentRoutingModule { }
