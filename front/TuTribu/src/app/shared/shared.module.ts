import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMarketplaceComponent } from './components/header-marketplace/header-marketplace.component';
import { HeaderTribusInternaComponent } from './components/header-tribus-interna/header-tribus-interna.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderMarketplaceComponent,
    HeaderTribusInternaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderMarketplaceComponent,
    HeaderTribusInternaComponent
  ]
})
export class SharedModule { }
