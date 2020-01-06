import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'user/login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'user/register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'user/panel',
    loadChildren: './dashboardUser/dashboard-user.module#DashboardUserModule'
  },
  {
    path: 'allproduct',
    loadChildren: './product-list/product-list.module#ProductListModule'
  },
  {
    path: 'detailproduct',
    loadChildren: './detail-product/detail-product.module#DetailProductModule'
  },
  {
    path: 'admin/panel',
    loadChildren: './Dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'admin/login',
    loadChildren: './Dashboard/login-admin/login-admin.module#LoginAdminModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
