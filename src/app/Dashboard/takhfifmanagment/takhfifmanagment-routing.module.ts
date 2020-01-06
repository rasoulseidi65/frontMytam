import { TakhfifupdateComponent } from './takhfifupdate/takhfifupdate.component';
import { ListTakhfifComponent } from './list-takhfif/list-takhfif.component';
import { TakhfifnewComponent } from "./takhfifnew/takhfifnew.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: TakhfifnewComponent
  },
  {
    path: "offerlist",
    component: ListTakhfifComponent
  },
  {
    path: "offerupdate",
    component: TakhfifupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakhfifmanagmentRoutingModule {}
