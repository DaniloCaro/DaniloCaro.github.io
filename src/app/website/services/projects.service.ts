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
            "img": "./assets/img/servicer.webp",
            "title": "Servicer Ltda.",
            "description": "Pagina web de aterrizaje responsive para empresa de soluciones integrales Servicer Ltda.",
            "skills": [
                "CSS, HTML, JS, Bootstrap."
            ],
            "link": "https://servicer-lp.herokuapp.com/"
        },
        {
            "id": 4,
            "img": "./assets/img/Cosmos.webp",
            "title": "Cosmos App Web",
            "description": "Aplicación web que brinda solución a la recepción sistemática de información requerida en matriculas académicas. La aplicación permite el cargue de los documentos del estudiante y la administración de los mismos por el personal administrativo.",
            "skills": [
                "CSS, HTML, JS, Docker,Python (Flask), PostgreSql."
            ],
            "link": "https://cosmosudc.herokuapp.com/"
        },
        {
            "id": 6,
            "img": "./assets/img/CreditCards-Angular.webp",
            "title": "CreditCards",
            "description": "Aplicación web responsive para la administración de los datos referentes a tarjetas de credito (Listar, agregar, modificar y eliminar) sin persistencia de datos.",
            "skills": [
                "Bootstrap, HTML, CSS, TypeScript, Angular."
            ],
            "link": "https://creditcards-angular.netlify.app/"
        },
        {
            "id": 5,
            "img": "./assets/img/Chatboa.webp",
            "title": "ChatBoa",
            "description": "Aplicación web responsive que ofrece una sala de chat funcional anónima la cual genera un nombre aleatorio y no persiste los mensajes.",
            "skills": [
                "Bootstrap, HTML, CSS, JavaScript, NodeJS."
            ],
            "link": "https://chatboa.herokuapp.com/"
        },
        {
            "id": 1,
            "img": "./assets/img/Platzi-Conf.webp",
            "title": "Platzi Conf.",
            "description": "Maquetación del sitio web de Platzi Conf.",
            "skills": [
                "Bootstrap, HTML, CSS, JavaScript."
            ],
            "link": "https://platziconference.netlify.app/"
        },
        {
            "id": 2,
            "img": "./assets/img/Batatabit.webp",
            "title": "Batatabit",
            "description": "Landing page de empresa Batatabit utilizando la metodología Mobile First.",
            "skills": [
                "BEM, HTML, CSS"
            ],
            "link": "https://github.com/DaniloCaro/MobileFirst"
        },
        {
            "id": 7,
            "img": "./assets/img/CRUD-Estudiante.webp",
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
            "link": "https://seminario-crud.netlify.app/"
        },
        {
            "id": 8,
            "img": "./assets/img/petcare/petcare(max-600).webp",
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
            "link": "https://petcare-a5766.web.app/"
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
    getProject(id: number): any {
        return this.project.find(project => project.id === id);
    }
}
