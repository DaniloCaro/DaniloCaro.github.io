import { Experience } from '../interface/experience.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private experiences: Experience[] = [
    {
      name: 'Ingeniería de Software - 2022',
      img: 'assets/img/udc.webp',
    },
  ]
  constructor() {
  }
  getExperiences(): Experience[] {
    return this.experiences;
  }
}
