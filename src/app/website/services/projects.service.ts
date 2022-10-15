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
      "img": "./assets/img/projects-images/servicer/servicer.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/servicer/servicer(max-600).webp",
        "max992": "./assets/img/projects-images/servicer/servicer(max-992).webp",
        "max1200": "./assets/img/projects-images/servicer/servicer(max-1200).webp",
        "png": "./assets/img/projects-images/servicer/servicer.png",
      },
      "title": "Servicer Ltda.",
      "description": "Pagina web de aterrizaje responsive para empresa de soluciones integrales Servicer Ltda.",
      "skills": [
        "CSS",
        "HTML",
        "JS",
        "Bootstrap"
      ],
      "link": "https://servicer-lp.herokuapp.com/",
      "status": "Finalizado",
      "date": "Jun/2022",
      "type": "Freelance",
    },
    {
      "id": 4,
      "img": "./assets/img/projects-images/cosmos/cosmos.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/cosmos/cosmos(max-600).webp",
        "max992": "./assets/img/projects-images/cosmos/cosmos(max-992).webp",
        "max1200": "./assets/img/projects-images/cosmos/cosmos(max-1200).webp",
        "png": "./assets/img/projects-images/cosmos/cosmos.png",
      },
      "title": "Cosmos App Web",
      "description": "Aplicación web que brinda solución a la recepción sistemática de información requerida en matriculas académicas. La aplicación permite el cargue de los documentos del estudiante y la administración de los mismos por el personal administrativo.",
      "skills": [
        "CSS",
        "HTML",
        "JS",
        "Docker",
        "Python (Flask)",
        "PostgreSql"
      ],
      "link": "https://cosmosudc.herokuapp.com/",
      "status": "En desarrollo",
      "date": "Feb/2022 - Ahora",
      "type": "Proyecto universitario",
    },
    {
      "id": 6,
      "img": "./assets/img/projects-images/creditcards/creditcards.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/creditcards/creditcards(max-600).webp",
        "max992": "./assets/img/projects-images/creditcards/creditcards(max-992).webp",
        "max1200": "./assets/img/projects-images/creditcards/creditcards(max-1200).webp",
        "png": "./assets/img/projects-images/creditcards/creditcards.png",
      },
      "title": "CreditCards",
      "description": "Aplicación web responsive para la administración de los datos referentes a tarjetas de credito (Listar, agregar, modificar y eliminar) sin persistencia de datos.",
      "skills": [
        "Bootstrap",
        "HTML",
        "CSS",
        "TypeScript",
        "Angular"
      ],
      "link": "https://creditcards-angular.netlify.app/",
      "status": "Finalizado",
      "date": "Jun/2022",
      "type": "Proyecto universitario",
    },
    {
      "id": 5,
      "img": "./assets/img/projects-images/chatboa/chatboa.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/chatboa/chatboa(max-600).webp",
        "max992": "./assets/img/projects-images/chatboa/chatboa(max-992).webp",
        "max1200": "./assets/img/projects-images/chatboa/chatboa(max-1200).webp",
        "png": "./assets/img/projects-images/chatboa/chatboa.png",
      },
      "title": "ChatBoa",
      "description": "Aplicación web responsive que ofrece una sala de chat funcional anónima la cual genera un nombre aleatorio y no persiste los mensajes.",
      "skills": [
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "NodeJS"
      ],
      "link": "https://chatboa.herokuapp.com/",
      "status": "Finalizado",
      "date": "Jun/2022",
      "type": "Proyecto universitario",
    },
    {
      "id": 1,
      "img": "./assets/img/projects-images/platziconf/platzi.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/platziconf/platzi(max-600).webp",
        "max992": "./assets/img/projects-images/platziconf/platzi(max-992).webp",
        "max1200": "./assets/img/projects-images/platziconf/platzi(max-1200).webp",
        "png": "./assets/img/projects-images/platziconf/platzi.png",
      },
      "title": "Platzi Conf.",
      "description": "Maquetación del sitio web de Platzi Conf.",
      "skills": [
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "link": "https://platziconference.netlify.app/",
      "status": "Finalizado",
      "date": "Jun/2022",
      "type": "Personal",
    },
    {
      "id": 2,
      "img": "./assets/img/projects-images/batatabit/batatabit.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/batatabit/batatabit(max-600).webp",
        "max992": "./assets/img/projects-images/batatabit/batatabit(max-992).webp",
        "max1200": "./assets/img/projects-images/batatabit/batatabit(max-1200).webp",
        "png": "./assets/img/projects-images/batatabit/batatabit.png",
      },
      "title": "Batatabit",
      "description": "Landing page de empresa Batatabit utilizando la metodología Mobile First.",
      "skills": [
        "BEM",
        "HTML",
        "CSS"
      ],
      "link": "https://batatabitlp.netlify.app/",
      "status": "Finalizado",
      "date": "May/2022",
      "type": "Personal",
    },
    {
      "id": 7,
      "img": "./assets/img/projects-images/crudstudents/crudstudents.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/crudstudents/crudstudents(max-600).webp",
        "max992": "./assets/img/projects-images/crudstudents/crudstudents(max-992).webp",
        "max1200": "./assets/img/projects-images/crudstudents/crudstudents(max-1200).webp",
        "png": "./assets/img/projects-images/crudstudents/crudstudents.png",
      },
      "title": "Students CRUD",
      "description": "Aplicación web responsive para la administración de datos (Listar, agregar, modificar y eliminar) de API estudiantes mediante formulario.",
      "skills": [
        "Bootstrap",
        "HTML",
        "CSS",
        "TypeScript",
        "Angular",
        "NodeJS"
      ],
      "link": "https://seminario-crud.netlify.app/",
      "status": "Finalizado",
      "date": "Jun/2022",
      "type": "Proyecto universitario",
    },
    {
      "id": 8,
      "img": "./assets/img/projects-images/petcare/petcare.webp",
      "imgsource": {
        "max600": "./assets/img/projects-images/petcare/petcare(max-600).webp",
        "max992": "./assets/img/projects-images/petcare/petcare(max-992).webp",
        "max1200": "./assets/img/projects-images/petcare/petcare(max-1200).webp",
        "png": "./assets/img/projects-images/petcare/pet-care.png",
      },
      "title": "PetCare",
      "description": "Aplicación web para una empresa veterinaria con sistema de autenticación como prueba técnica en el cargo desarrollador frontend con Angular. Prototipo en Adobe XD para resolución 1920x1080. \nUser: eve.holt@reqres.in\n Password: cityslicka",
      "skills": [
        "Angular",
        "API Rest",
        "JWT",
        "Nodejs",
        "Typescript",
        "npm"
      ],
      "link": "https://petcare-a5766.web.app/",
      "status": "Finalizado",
      "date": "Sep/2022",
      "type": "Prueba técnica",
    },
  ]
  // constructor(private http: HttpClient) {
  // }
  constructor() { }
  // Obtiene los proyectos de la API
  // getProjectsApi() : Observable<ProjectApiInterface[]> {
  //   return this.http.get<ProjectApiInterface[]>(this.myAppUrl + this.myApiProjects);
  // }
  // Obtiene los proyectos de prueba
  getProjects(): ProjectApiInterface[] {
    return this.project;
  }
  // Obtiene un proyecto por id
  // getProject(id: number): any {
  //     return this.project.find(project => project.id === id);
  // }TODO:PASO 3
  getProject(title: string): any {
    return this.project.find(project => project.title === title);
  }
}
