import { Component, Input, OnInit } from '@angular/core';
// Services
import { SkillsService } from './../../services/skills.service';
// Interfaces
import { SkillsInterface } from './../../interface/skills.inteface';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {

  constructor(private _skillsService:SkillsService) { }

  skills:SkillsInterface[]=[]

  ngOnInit(): void {
    this.skills = this._skillsService.getSkills();
  }
}
