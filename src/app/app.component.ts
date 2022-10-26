import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `oi<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'pokedex';
}
