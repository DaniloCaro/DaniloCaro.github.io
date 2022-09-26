import { Component, Input, OnInit } from '@angular/core';
// Services
import { ExperiencesService } from '../../services/experiences.service';
// Interfaces
import { Experience } from '../../interface/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() titleExperience = 'Experiencia';

  experiences:Experience[]=[]

  constructor(private _experiencesService: ExperiencesService) { }

  ngOnInit(): void {
    this.experiences = this._experiencesService.getExperiences();
  }
}
