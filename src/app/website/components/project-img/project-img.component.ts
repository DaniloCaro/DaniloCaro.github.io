import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-project-img',
  templateUrl: './project-img.component.html',
  styleUrls: ['./project-img.component.scss']
})
export class ProjectImgComponent implements OnInit {

  @Input() projectImg:string='assets/img/missing-image.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
