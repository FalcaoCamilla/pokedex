import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Module
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

/*
O Shared Module é importado para que seja possível utilizar os seletores
dos components declarados nele (shared.module)
*/

//Pages 
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

/*
As páginas principais serão a home e details (detalhes de cada pokemon)
Nelas, podem estar referenciados outros components, que são génericos, para exibição.
Isso deverá ser feito por meio de seus seletores.
*/

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, DetailsComponent]
})
export class PagesModule { }
