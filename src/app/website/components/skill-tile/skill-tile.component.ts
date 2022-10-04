import { Component, Input, OnInit } from '@angular/core';
// Interfaces
import { SkillsInterface } from './../../interface/skills.inteface';

@Component({
  selector: 'app-skill-tile',
  templateUrl: './skill-tile.component.html',
  styleUrls: ['./skill-tile.component.scss']
})
export class SkillTileComponent implements OnInit {

  constructor() { }

  @Input() skillsReceptor!:SkillsInterface;

  ngOnInit(): void {
  }
}
