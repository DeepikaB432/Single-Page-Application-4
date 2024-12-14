import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HospitalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital';
}
