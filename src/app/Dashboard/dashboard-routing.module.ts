import { ContentDahboardComponent } from "./content-dahboard/content-dahboard.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: ContentDahboardComponent
      }
    ]
  },
  {
    path: "news",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren: "./newsmanagment/newsmanagment.module#NewsmanagmentModule"
      }
    ]
  },
  {
    path: "article",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./articlemanagment/articlemanagment.module#ArticlemanagmentModule"
      }
    ]
  },
  {
    path: "product",
    component: DashboardComponent,

    children: [
      {
        path: "",
        loadChildren:
          "./productmanagment/productmanagment.module#ProductmanagmentModule"
      }
    ]
  },

  {
    path: "video",
    component: DashboardComponent,

    children: [
      {
        path: "",
        loadChildren:
          "./videomanagment/videomanagment.module#VideomanagmentModule"
      }
    ]
  },
  {
    path: "offer",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./takhfifmanagment/takhfifmanagment.module#TakhfifmanagmentModule"
      }
    ]
  },
  {
    path: "member",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./membermanagment/membermanagment.module#MembermanagmentModule"
      }
    ]
  },
  {
    path: "comment",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./commentmanagment/commentmanagment.module#CommentmanagmentModule"
      }
    ]
  },
  {
    path: "slider",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./slidermanagment/slidermanagment.module#SlidermanagmentModule"
      }
    ]
  },
  {
    path: "projectus",
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./projectmanagment/projectmanagment.module#ProjectmanagmentModule"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
