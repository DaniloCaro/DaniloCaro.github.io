import { Experience } from '../interface/experience.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private experiences: Experience[] = [
    {
      name: 'Frontend Developer',
      img: 'assets/img/missing-image.svg',
    },
    {
      name: 'Backend Developer',
      img: 'assets/img/missing-image.svg',
    },
    {
      name: 'FullStack Developer',
      img: 'assets/img/missing-image.svg',
    }
  ]
  constructor() {
  }
  getExperiences(): Experience[] {
    return this.experiences;
  }
}
