import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { ProjectsService } from './../../services/projects.service';
// Interface
import { ProjectApiInterface } from './../../interface/project-api.interface';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  idProject: any={};
  projectOnly:any = {};

  constructor(private activatedRoute: ActivatedRoute, private _projectsService: ProjectsService) {
    this.activatedRoute.params.subscribe(params => {
      this.idProject = parseInt(params['id']);
      console.log(typeof this.idProject);
    });
  }

  ngOnInit(): void {
    // this.projectOnly = this._projectsService.getProjects().filter((project) => project.id == this.idProject);
    this.projectOnly = this._projectsService.getProject(this.idProject);
  }
}
