import { Component, OnInit } from '@angular/core';
// Services
import { ProjectsService } from '../../services/projects.service';
// Interfaces
import { ProjectInterface } from '../../interface/project.interface';
import { ProjectApiInterface } from '../../interface/project-api.interface';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {

  constructor(private _projectsService:ProjectsService) { }

  // Objeto de prueba
  projects:ProjectInterface[]=[]
  // Objeto de la API
  projectsApi:ProjectApiInterface[]=[]

  ngOnInit(): void {
    // Objeto de prueba
    this.projects = this._projectsService.getProjects();
    // Objeto de la API
    // this._projectsService.getProjectsApi().subscribe(data => {
    //   const descData = data.sort((a, b) => (a > b) ? 1 : -1);// Ordena los proyectos de la API por fecha de creación
    //   this.projectsApi = descData;
    // });
    this._projectsService.getProjectsApi().subscribe({
      next: (data) => {
        // Ordena los proyectos de la API por id en orden descendente
        const descData = data.sort((a, b) => (a.id > b.id) ? -1 : 1);
        this.projectsApi = descData;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
