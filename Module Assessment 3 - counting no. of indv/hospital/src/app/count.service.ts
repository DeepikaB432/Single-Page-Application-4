import { Injectable } from '@angular/core';
import { Patient,Doctor } from './hospital/hospital.component';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

  countDoctors(hospitalDoctors:Doctor[]) {
    return hospitalDoctors.length;
  }

  countPatients(hospitalPatients:Patient[]) {
    return hospitalPatients.length;
  }

  getTotalCount(hospitalDoctors:Doctor[],hospitalPatients:Patient[]){
    const totalDoctor = this.countDoctors(hospitalDoctors);
    const totalPatients = this.countPatients(hospitalPatients)
    return totalDoctor + totalPatients;
  }
}
