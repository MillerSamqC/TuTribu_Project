import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { ProductComponent } from './components/product/product.component';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { StarFill } from 'ng-bootstrap-icons/icons';

import { MartketplaceRoutingModule } from './marketplace-routing.module';

const icons = {
  StarFill
}

@NgModule({
  declarations: [
    MarketplaceComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BootstrapIconsModule.pick(icons),
    MartketplaceRoutingModule
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class MarketplaceModule { }
