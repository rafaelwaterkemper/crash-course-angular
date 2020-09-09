import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String = 'crash-course-angular';
  count: number = 0;

  constructor(){}

  changeName() {
    this.name = `Jose - ${++this.count}`;
  }
}
