import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public spinner!:boolean;
  public website!:boolean;

  constructor() {
    // this.spinner = true;
    // this.website = false;
    // setTimeout(() => {
      this.spinner = false;
      this.website = true;
    // }, 500);

    // Spinner mientras carga las imagenes
    // this.spinner = true;
    // this.website = false;
    // window.addEventListener('load', () => {
    //   this.spinner = false;
    //   this.website = true;
    // }
    // );
  }

  ngOnInit(): void {
  }

}
