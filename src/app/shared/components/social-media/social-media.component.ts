import { Component, Input, OnInit } from '@angular/core';
import { Social } from './../../interfaces/social.interface';


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  @Input() socialMedia: Social = {
    name: '404',
    img:'./assets/img/missing-image.svg',
    link: '404'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
