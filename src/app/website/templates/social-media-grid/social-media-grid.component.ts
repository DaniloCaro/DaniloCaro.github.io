import { Component, OnInit } from '@angular/core';
// Model
import { Social } from '../../interface/social.interface';

@Component({
  selector: 'app-social-media-grid',
  templateUrl: './social-media-grid.component.html',
  styleUrls: ['./social-media-grid.component.scss']
})
export class SocialMediaGridComponent implements OnInit {

  public arregloIconos:Social[] = [
    {
      name: 'linkedin',
      link: './assets/img/linkedin.svg',
    },
    {
      name: 'github',
      link: './assets/img/github.svg',
    },
    {
      name: 'youtube',
      link: './assets/img/youtube.svg',
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
