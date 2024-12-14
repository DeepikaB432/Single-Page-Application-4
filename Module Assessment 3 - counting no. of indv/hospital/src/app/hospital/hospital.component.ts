import { Component } from '@angular/core';
import { CountService } from '../count.service';

export interface Doctor {
  name:string;
  specialization:string;
}

export interface Patient {
  name:string;
  illness:string;
}

@Component({
  selector: 'app-hospital',
  imports: [],
  templateUrl: './hospital.component.html',
  styleUrl: './hospital.component.css'
})

export class HospitalComponent {

  hospitalDoctors: Doctor[]=[
    {name: "Dr. Naber",specialization:'Cardiology'},
    {name: "Dr. Taylor",specialization:'Orthopedics'},
    {name: "Dr. John",specialization:'Neurology'},
    {name: "Dr. Will",specialization:'Surgeon'}
  ]

  hospitalPatients:Patient[]=[
    {name: "Smith",illness:'Heart Problem'},
    {name: "Robert",illness:'Knee Pain'},
    {name: "Carol",illness:'Migraine'},
    {name: "Jim",illness:'Joint Pain'}
  ];

  totalCount:number;

  constructor(private countService :CountService){
    this.totalCount = this.countService.getTotalCount(this.hospitalDoctors,this.hospitalPatients)
  }

}
