import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor(private http: HttpClient){

  }

  get apiListAllPokemons(): Observable<any>{ //Um acessador get não recebe parâmetros
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map( (resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
    /*
    O pipe serve como um filtro no http.
    Nesse caso, essa solicitação retorna um objeto com o nome e a url de dados completos do pokemon,
    por isso, utiliza-se o pipe e o tap para
    */
  }

  public apiGetPokemon(url: string): Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
