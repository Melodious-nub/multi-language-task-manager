import { Injectable, signal } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<Task[]>(this.loadTasks());

  private loadTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

  addTask(task: Task): void {
    this.tasks.update(tasks => [...tasks, task]);
    this.saveTasks();
  }

  updateTaskStatus(id: number, status: Task['status']): void {
    this.tasks.update(tasks => {
      return tasks.map(task => task.id === id ? { ...task, status } : task);
    });
    this.saveTasks();
  }

  deleteTask(id: number): void {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
    this.saveTasks();
  }
}
