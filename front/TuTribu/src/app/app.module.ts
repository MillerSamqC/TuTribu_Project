import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutMarketplaceComponent } from './layout-marketplace/layout-marketplace.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { LayoutTribusInternaComponent } from './layout-tribus-interna/layout-tribus-interna.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    SharedModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
