import { VideoupdateComponent } from './videoupdate/videoupdate.component';
import { ListvideoComponent } from './listvideo/listvideo.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VideoComponent } from "./video/video.component";

const routes: Routes = [
  { path: "", component: VideoComponent },
  { path: "listvideo", component: ListvideoComponent },
  { path: "videoupdate/:id", component: VideoupdateComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideomanagmentRoutingModule {}
