import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LayoutMarketplaceComponent } from './layout-marketplace/layout-marketplace.component';
import { LayoutTribusInternaComponent } from './layout-tribus-interna/layout-tribus-interna.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: 'internal-tribes',
    component: LayoutTribusInternaComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./tribus-interna/tribus-interna.module').then(m => m.TribusInternaModule)
      }
    ]
  },
  {
    path: 'marketplace',
    component: LayoutTribusInternaComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
