import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  constructor() { }

  public project: any = {
    name: 'Nombre del Proyecto',
    description: 'Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    link: 'https://github.com/',
  }

  ngOnInit(): void {
  }
}
