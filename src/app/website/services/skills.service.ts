import { SkillsInterface } from './../interface/skills.inteface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: SkillsInterface[] = [
    {
      name: 'HTML',
      img: 'assets/img/skills/html.svg',
      color: '0px 0px 10.5px #f1662a'
    },
    {
      name: 'CSS',
      img: 'assets/img/skills/css.svg',
      color: '0px 0px 10.5px #33a9dc'
    },
    {
      name: 'JavaScript',
      img: 'assets/img/skills/js.svg',
      color: '0px 0px 10.5px #f0db4f'
    },
    {
      name: 'TypeScript',
      img: 'assets/img/skills/typescript.svg',
      color: '0px 0px 10.5px #007acc'
    },
    {
      name: 'Angular',
      img: 'assets/img/skills/angular.svg',
      color: '0px 0px 10.5px #dd0031'
    },
    {
      name: 'React',
      img: 'assets/img/skills/react.svg',
      color: '0px 0px 10.5px #61dafb'
    },
    {
      name: 'NodeJS',
      img: 'assets/img/skills/nodejs.svg',
      color: '0px 0px 10.5px #339933'
    },
    {
      name: 'Sass',
      img: 'assets/img/skills/sass.svg',
      color: '0px 0px 10.5px #cc6699'
    },
    {
      name: 'Bootstrap',
      img: 'assets/img/skills/bootstrap.svg',
      color: '0px 0px 10.5px #563d7c'
    },
    {
      name: 'MySQL',
      img: 'assets/img/skills/mysql.svg',
      color: '0px 0px 10.5px #4479a1'
    },
    {
      name: 'PostgreSQL',
      img: 'assets/img/skills/postgresql.svg',
      color: '0px 0px 10.5px #336791'
    },
    {
      name: 'NPM',
      img: 'assets/img/skills/npm.svg',
      color: '0px 0px 10.5px #cb3837'
    }
  ];

  constructor() { }
  getSkills(): SkillsInterface[] {
    return this.skills;
  }
}
