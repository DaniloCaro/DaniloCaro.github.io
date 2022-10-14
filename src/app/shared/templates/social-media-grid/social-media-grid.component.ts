import { Component, OnInit } from '@angular/core';
// Model
import { Social } from './../../interfaces/social.interface';

@Component({
  selector: 'app-social-media-grid',
  templateUrl: './social-media-grid.component.html',
  styleUrls: ['./social-media-grid.component.scss']
})
export class SocialMediaGridComponent implements OnInit {

  public arregloIconos:Social[] = [
    {
      name: 'linkedin',
      img:'./assets/img/linkedin.svg',
      link: 'https://www.linkedin.com/in/danilocaro/',
    },
    {
      name: 'github',
      img: './assets/img/github.svg',
      link: 'https://github.com/DaniloCaro',
    },
    {
      name: 'youtube',
      img: './assets/img/youtube.svg',
      link: 'https://www.youtube.com/channel/UC4x7STAg_4593TcXzBCbfNw',
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
