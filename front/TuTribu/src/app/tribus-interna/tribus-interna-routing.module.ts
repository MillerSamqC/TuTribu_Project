import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevasTribusComponent } from './components/nuevas-tribus/nuevas-tribus.component';
import { TribusInternaComponent } from './components/tribus-interna/tribus-interna.component';

const routes: Routes = [
  {
    path:'',
    component: TribusInternaComponent
  },
  {
    path: 'nueva',
    component: NuevasTribusComponent
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
export class TribusIntenaRoutingModule { }
