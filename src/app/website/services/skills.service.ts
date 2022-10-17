import { SkillsInterface } from './../interface/skills.inteface';
import { Injectable } from '@angular/core';
import data from '../data/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: SkillsInterface[] = data;

  constructor() { }
  getSkills(): SkillsInterface[] {
    return this.skills;
  }
}
