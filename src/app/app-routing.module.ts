import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)}
];
/*
A aplicação utiliza os caminhos carregados do pages.module,
Eles, no entanto, foram importados pelo módulo de rotas routing.module, 
que concentra as páginas principais da aplicação por meio das rotas propriamente ditas (routes - path)
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forRoot para o routing principal
  exports: [RouterModule]
})
export class AppRoutingModule { }
