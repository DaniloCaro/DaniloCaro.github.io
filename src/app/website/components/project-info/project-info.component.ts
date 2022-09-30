import { Component, OnInit, Input } from '@angular/core';
//Interface
import { ProjectApiInterface } from './../../interface/project-api.interface';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  constructor() { }

  @Input() proj!:ProjectApiInterface;

  ngOnInit(): void {
  }
}
