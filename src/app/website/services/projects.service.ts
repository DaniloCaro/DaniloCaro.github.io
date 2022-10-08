import { ProjectApiInterface } from './../interface/project-api.interface';
import { Injectable } from '@angular/core';
// import { ProjectInterface } from './../interface/project.interface';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // URL de la API
  // private myAppUrl:string = 'https://portafolio-danilo.herokuapp.com/';
  // private myApiProjects:string = 'api/project/';
  // Objeto de prueba
  private project: ProjectApiInterface[] = [
    {
        "id": 3,
        "img": "./assets/img/CreditCards-Angular.webp",
        "title": "CreditCards",
        "description": "CRUD sobre datos de tarjetas de credito sin uso de Database.",
        "skills": [
            "Bootstrap, HTML, CSS, TypeScript, Angular."
        ],
        "link": "https://creditcards-angular.netlify.app/"
    },
    {
        "id": 4,
        "img": "./assets/img/Chatboa.webp",
        "title": "ChatBoa App Web",
        "description": "Sala de chat funcional.",
        "skills": [
            "Bootstrap, HTML, CSS, JavaScript, NodeJS."
        ],
        "link": "https://chatboa.herokuapp.com/"
    },
    {
        "id": 5,
        "img": "./assets/img/Platzi-Conf.webp",
        "title": "Platzi Conf. Clon",
        "description": "Maquetación del sitio web de Platzi Conf.",
        "skills": [
            "Bootstrap, HTML, CSS, JavaScript."
        ],
        "link": "https://platziconference.netlify.app/"
    },
    {
        "id": 6,
        "img": "./assets/img/Batatabit.webp",
        "title": "Batatabit Landing Page",
        "description": "Landing page de empresa Batatabit utilizando la metodología Mobile First.",
        "skills": [
            "BEM, HTML, CSS"
        ],
        "link": "https://github.com/DaniloCaro/MobileFirst"
    },
    {
        "id": 7,
        "img": "./assets/img/CRUD-Estudiante.webp",
        "title": "Consumo de API Estudiantes",
        "description": "CRUD sobre datos basicos de estudiantes.",
        "skills": [
            "Bootstrap",
            "HTML",
            "CSS",
            "TypeScript",
            "Angular",
            "NodeJS"
        ],
        "link": "https://seminario-crud.netlify.app/"
    },
    {
        "id": 8,
        "img": "./assets/img/petcare/petcare(max-600).webp",
        "title": "Prueba técnica frontend developer Angular",
        "description": "Desarrollo de una prueba técnica para una empresa de desarrollo de software en Angular utilizando un prototipo en Adobe XD para resolución de pantalla 1920x1080. \nUser: eve.holt@reqres.in Password: cityslicka.",
        "skills": [
            "Angular",
            "API Rest",
            "JWT",
            "Nodejs",
            "Typescript",
            "npm"
        ],
        "link": "https://petcare-a5766.web.app/"
    },
    {
        "id": 2,
        "img": "./assets/img/Cosmos.webp",
        "title": "Cosmos App Web",
        "description": "Aplicación web para la recepción sistemática de información requerida en matriculas académicas.",
        "skills": [
            "CSS, HTML, JS, Docker,Python (Flask), PostgreSql."
        ],
        "link": "https://cosmosudc.herokuapp.com/"
    },
    {
        "id": 1,
        "img": "./assets/img/servicer.webp",
        "title": "Landing page Servicer Ltda.",
        "description": "Landing page para empresa de soluciones integrales.",
        "skills": [
            "CSS, HTML, JS, Bootstrap."
        ],
        "link": "https://servicer-lp.herokuapp.com/"
    }
]
  // constructor(private http: HttpClient) {
  // }
  constructor() {}
  // Obtiene los proyectos de la API
  // getProjectsApi() : Observable<ProjectApiInterface[]> {
  //   return this.http.get<ProjectApiInterface[]>(this.myAppUrl + this.myApiProjects);
  // }
  // Obtiene los proyectos de prueba
  getProjects(): ProjectApiInterface[] {
    return this.project;
  }
}
