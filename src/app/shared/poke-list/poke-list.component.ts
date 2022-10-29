import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  public setAllPokemons: any;

  constructor(private PokeApiService: PokeAPIService){

  }

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );
    //Ao utilizar o get, não é necessário passar qualquer valor como parâmetro
  }


  public getSearch(value: string){
    const filter = this.setAllPokemons.filter(
      (res: any) => {
        return !res.name.indexOf(value.toLowerCase())
      }
    );
    this.getAllPokemons = filter;
  }
  /*
  A função getSearch, acionada pelo EventEmitter instanciado pela propriedade "emitSearc",
  cria uma constante chamada "filter", que recebe o retorno da solicitação do PokeAPIService
  chamado, neste component, de getAllPokemons de maneira filtrada, por meio do filter do js.
  O filter funciona, então, verificando se o res.name do valor enviado como parâmetro no poke-search
  existe de fato. Caso não haja nenhum elemento de index X, com valor semelhante ou igual ao que foi passado,
  nada é exibido.
  No entanto, se o
  */

}
