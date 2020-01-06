import { CKEditorModule } from 'ckeditor4-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmanagmentRoutingModule } from './productmanagment-routing.module';
import { ProductnewComponent } from './productnew/productnew.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { MatRadioModule } from '@angular/material';
import { ProductupdateComponent } from './productupdate/productupdate.component';

@NgModule({
  declarations: [ProductnewComponent, ProductlistComponent, ProductupdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    CKEditorModule,
    ProductmanagmentRoutingModule
  ]
})
export class ProductmanagmentModule { }
