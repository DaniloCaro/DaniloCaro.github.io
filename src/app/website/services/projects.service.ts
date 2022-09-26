import { ProjectInterface } from './../interface/project.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private project: ProjectInterface[] = [
    {
      name:'Prueba técnica frontend developer Angular',
      description: 'Desarrollo de una prueba técnica para una empresa de desarrollo de software en Angular utilizando un prototipo en Adobe XD para resolución de pantalla 1920x1080. User:eve.holt@reqres.in Password:cityslicka.',
      skills: 'Angular, API Rest, JWT, Nodejs, Typescript, HTML, CSS, npm.',
      link: 'https://petcare-a5766.web.app/',
      img:'./assets/img/petcare/petcare(max-600).webp',
    }
  ]
  constructor() {
  }
  getProjects(): ProjectInterface[] {
    return this.project;
  }
}
