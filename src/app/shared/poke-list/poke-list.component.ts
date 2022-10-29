import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;

  constructor(private PokeApiService: PokeAPIService){

  }

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    );
    //Ao utilizar o get, não é necessário passar qualquer valor como parâmetro
  }

}
