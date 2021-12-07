import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ShippingInfoFormComponent } from './components/shipping-info-form/shipping-info-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


const routes: Routes = [
 {
   path: '',
   component: NavComponent,
   children: [
    {
      path: 'create',
      component: ShippingInfoFormComponent
    },
    {
      path: 'productos',
      component: ProductsListComponent
    },
    {
      path: 'productos/crear',
      component: ProductFormComponent
    }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
