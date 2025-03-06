import { Component } from '@angular/core';
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-task-management',
  imports: [AddTaskComponent, TaskListComponent],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css'
})
export class TaskManagementComponent {

}
