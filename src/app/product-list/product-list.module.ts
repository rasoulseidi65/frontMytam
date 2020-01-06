import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductComponent,],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ],
  exports:[],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class ProductListModule { }
