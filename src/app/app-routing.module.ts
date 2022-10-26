import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)}
  //utilizando os caminhos carregados do routing.module, que foi importado pelo pages.module (observar comportamento do app.module e app-routing.module)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forRoot para o routing principal
  exports: [RouterModule]
})
export class AppRoutingModule { }
