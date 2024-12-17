import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks:Task[] | any;
  constructor(private service:TasksServiceService){}

  ngOnInit(){
    // this.service.getTasks().subscribe((result:{tasks:[]})=>{
    //   this.tasks = result.tasks;
    // })
  }
}
