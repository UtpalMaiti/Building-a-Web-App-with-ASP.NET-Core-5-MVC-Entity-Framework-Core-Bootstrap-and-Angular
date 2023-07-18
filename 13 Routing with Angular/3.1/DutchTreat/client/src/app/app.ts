import { Component } from '@angular/core';
import Store from './store';

@Component({
  selector: 'the-shop',
  templateUrl: "./app.html",
  styleUrls: []
})
export class AppComponent {
  title = 'Store';

  constructor(public store: Store) { }
}
