import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './components/options/options.component';
import { TribusInternaComponent } from './components/tribus-interna/tribus-interna.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TribusIntenaRoutingModule } from './tribus-interna-routing.module';



@NgModule({
  declarations: [
    OptionsComponent,
    TribusInternaComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    TribusIntenaRoutingModule
  ]
})
export class TribusInternaModule { }
