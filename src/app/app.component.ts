import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public spinner!:boolean;
  public website!:boolean;

  constructor() {
    this.spinner = true;
    this.website = false;
    window.addEventListener('load', () => {
      this.spinner = false;
      this.website = true;
    }
    );
  }
}
