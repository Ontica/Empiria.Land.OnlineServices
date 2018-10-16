import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <main-layout>
      <router-outlet></router-outlet>
    </main-layout>
  `
})
export class AppComponent { }
