import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
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
