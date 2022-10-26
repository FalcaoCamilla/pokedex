import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  
  imports: [
    CommonModule
  ],

  declarations: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],

  //shared.module permite que os componentes em comum sejam exportados, para uso genérico
  exports: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeSearchComponent
  ]

})

export class SharedModule { }
