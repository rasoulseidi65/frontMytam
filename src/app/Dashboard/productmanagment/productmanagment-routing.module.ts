import { ProductupdateComponent } from './productupdate/productupdate.component';
import { ProductnewComponent } from './productnew/productnew.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {
    path: "" , component : ProductnewComponent
  },
  {
    path :"listproduct" , component: ProductlistComponent
  },
  {
    path :"updateproduct/:id" , component: ProductupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductmanagmentRoutingModule { }
