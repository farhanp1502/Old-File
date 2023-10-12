import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductslistRoutingModule } from './productslist-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    ProductslistRoutingModule,
    FormsModule
  ]
})
export class ProductslistModule { }
