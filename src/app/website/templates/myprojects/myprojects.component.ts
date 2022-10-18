import { Component, OnInit } from '@angular/core';
// Services
import { ProjectsService } from '../../services/projects.service';
// Interfaces
import { ProjectApiInterface } from '../../interface/project-api.interface';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {

  constructor(private _projectsService:ProjectsService) { }

  projects:ProjectApiInterface[]=[]

  ngOnInit(): void {
    this._projectsService.getProjectsObservable().subscribe({
      next:(data:ProjectApiInterface[])=>{
        this.projects = data;
        this.projects.sort((a,b)=>{
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("getProjectsObservable completado");
      }
    });
  }
}
