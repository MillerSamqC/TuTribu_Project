import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from './../material/material.module';

import { NavComponent } from './components/nav/nav.component';
import { ShippingInfoFormComponent } from './components/shipping-info-form/shipping-info-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


@NgModule({
  declarations: [
    ShippingInfoFormComponent,
    NavComponent,
    ProductsListComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ]
})
export class AdminModule { }
