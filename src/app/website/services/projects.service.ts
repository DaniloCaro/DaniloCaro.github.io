import { ProjectApiInterface } from './../interface/project-api.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import data from '../data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private project: ProjectApiInterface[] = data;

  private projectsObservable = new Observable<ProjectApiInterface[]>(observer => {
    observer.next(this.project);
  });

  constructor() { }

  getProjectsObservable(): Observable<ProjectApiInterface[]> {
    return this.projectsObservable;
  }

  getProjectObservable(title: string): Observable<ProjectApiInterface[]> {
    return new Observable<ProjectApiInterface[]>(observer => {
      observer.next(this.project.filter(project => project.title === title));
    });
  }

  getProjects(): ProjectApiInterface[] {
    return this.project;
  }

  getProject(title: string): any {
    return this.project.find(project => project.title === title);
  }
}
