import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter()
  /*
  O output indica que um valor de saída será declarado.
  Neste acaso, um valor deverá sair do component poke-search e ser recebido pelo poke-list

  De modo geral, a ordem de emissão de eventos no angular é:
  Pai emite para filho (input)
  Filho emite para pai (output)

  A propriedadde "emitSearch", do tipo EventEmitter retornando uma string,
  recebe uma função construtora do próprio EventEmitter.

  O EventEmitter torna possível confirmar que um valor foi emitido com sucesso.
  Através do método search, é possível perceber isto.
  */

  constructor() { }

  ngOnInit() {
  }

  public search(value: string){
    this.emitSearch.emit(value);
  }
  /*
  A função search recebe um value, passado no html do component.

  A propriedade emitSearch é utilizada no momento em que a função search() é acionada.
  Como essa propriedade recebe o construtor do EventEmitter, é possível que
  um valor (nesse caso o mesmo passado pelo parâmetro) seja emitido através dela.

  Tudo isso é feito para que no component "poke-list", os dados enviados pelo "poke-search"
  sejam válidos e utilizados (ver poke-list.html)
  */

}
