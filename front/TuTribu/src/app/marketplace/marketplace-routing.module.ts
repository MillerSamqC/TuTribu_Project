import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
  },
  {
    path: 'product',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MartketplaceRoutingModule { }
