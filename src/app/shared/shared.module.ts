import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';

@NgModule({

  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  exports: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeSearchComponent
  ]
/*
O shared.module permite que os componentes em comum sejam exportados, para uso genérico
Nesse caso, esses components são exibidos através da página Home ou Details (páginas principais),
através de seletores no próprio html.
O Módulo shared está sendo importado no pages.module, pois não é lido como uma rota,
e sim como o local onde os components são declarados para exibição
*/
})

export class SharedModule { }
