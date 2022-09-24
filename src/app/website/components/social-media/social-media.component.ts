import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../../interface/social.interface'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  @Input() socialMedia: Social = {
    name: '',
    link: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
