import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { MartketplaceRoutingModule } from './marketplace-routing.module';


@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    MartketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
