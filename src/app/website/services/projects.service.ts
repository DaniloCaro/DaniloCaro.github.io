import { ProjectInterface } from './../interface/project.interface';
import { ProjectApiInterface } from './../interface/project-api.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // URL de la API
  private myAppUrl:string = 'https://portafolio-danilo.herokuapp.com/';
  private myApiProjects:string = 'api/project/';
  // Objeto de prueba
  private project: ProjectInterface[] = [
    {
      name:'Prueba técnica frontend developer Angular',
      description: 'Desarrollo de una prueba técnica para una empresa de desarrollo de software en Angular utilizando un prototipo en Adobe XD para resolución de pantalla 1920x1080. \nUser: eve.holt@reqres.in Password: cityslicka.',
      skills: 'Angular, API Rest, JWT, Nodejs, Typescript, HTML, CSS, npm.',
      link: 'https://petcare-a5766.web.app/',
      img:'./assets/img/petcare/petcare(max-600).webp',
    }
  ]
  constructor(private http: HttpClient) {
  }
  // Obtiene los proyectos de la API
  getProjectsApi() : Observable<ProjectApiInterface[]> {
    return this.http.get<ProjectApiInterface[]>(this.myAppUrl + this.myApiProjects);
  }
  // Obtiene los proyectos de prueba
  getProjects(): ProjectInterface[] {
    return this.project;
  }
}
