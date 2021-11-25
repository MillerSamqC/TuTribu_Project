import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutMarketplaceComponent } from './layout-marketplace/layout-marketplace.component';

import { SharedModule } from './shared/shared.module';
import { LayoutTribusInternaComponent } from './layout-tribus-interna/layout-tribus-interna.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutMarketplaceComponent,
    LayoutTribusInternaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
