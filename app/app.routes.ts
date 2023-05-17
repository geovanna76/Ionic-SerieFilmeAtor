import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'filme-detalhe',
    loadComponent: () => import('./filme-detalhe/filme-detalhe.page').then( m => m.FilmeDetalhePage)
  },
  {
    path: 'serie-detalhe',
    loadComponent: () => import('./serie-detalhe/serie-detalhe.page').then( m => m.SerieDetalhePage)
  },
  {
    path: 'ator-detalhe',
    loadComponent: () => import('./ator-detalhe/ator-detalhe.page').then( m => m.AtorDetalhePage)
  },
];
