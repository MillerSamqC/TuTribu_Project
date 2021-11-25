import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TribusInternaComponent } from './components/tribus-interna/tribus-interna.component';

const routes: Routes = [
  {
    path:'',
    component: TribusInternaComponent
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
