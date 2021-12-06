import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './components/options/options.component';
import { TribusInternaComponent } from './components/tribus-interna/tribus-interna.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NuevasTribusComponent } from './components/nuevas-tribus/nuevas-tribus.component';
import { TribusIntenaRoutingModule } from './tribus-interna-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrandsComponent } from './components/brands/brands.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    OptionsComponent,
    TribusInternaComponent,
    SummaryComponent,
    BrandsComponent,
    PostComponent,
    NuevasTribusComponent,
  ],
  imports: [
    CommonModule,
    TribusIntenaRoutingModule,
    FontAwesomeModule,
  ]
})
export class TribusInternaModule { }
