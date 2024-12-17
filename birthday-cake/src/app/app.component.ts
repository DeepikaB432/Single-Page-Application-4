import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'birthday-cake';
}