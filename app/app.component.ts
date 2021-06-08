import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = 'Gaurang Bhatt';
  constructor() {
    this.name = 'GAURANG BHATT';
  }
  changeName(name: string): string {
    this.name = 'GAURANG Bhatt';
    return this.name;
  }
}
