import { Component, signal } from '@angular/core';
import { TaskService } from '../task.service';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskTitle = signal('');
  taskDescription = signal('');

  constructor(private taskService: TaskService) { }

  addTask() {
    if (!this.taskTitle() || !this.taskDescription()) return;

    this.taskService.addTask({
      id: Date.now(),
      title: this.taskTitle(),
      description: this.taskDescription(),
      status: 'pending'
    });

    this.taskTitle.set('');
    this.taskDescription.set('');
  }
}
