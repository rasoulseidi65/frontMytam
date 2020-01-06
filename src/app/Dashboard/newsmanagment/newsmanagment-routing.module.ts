import { NewsupdateComponent } from './newsupdate/newsupdate.component';
import { ListnewsComponent } from './listnews/listnews.component';
import { NewsComponent } from './newsNew/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "" , component : NewsComponent
  },
  {
    path: "listnews" , component : ListnewsComponent
  },
  {
    path: "newsupdate/:id" , component : NewsupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsmanagmentRoutingModule { }
