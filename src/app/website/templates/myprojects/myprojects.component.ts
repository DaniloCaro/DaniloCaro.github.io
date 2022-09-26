import { Component, OnInit } from '@angular/core';
// Services
import { ProjectsService } from '../../services/projects.service';
// Interfaces
import { ProjectInterface } from '../../interface/project.interface';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {

  constructor(private _projectsService:ProjectsService) { }

  projects:ProjectInterface[]=[]

  ngOnInit(): void {
    this.projects = this._projectsService.getProjects();
  }
}
