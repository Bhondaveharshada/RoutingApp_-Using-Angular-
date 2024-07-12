// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   private tasksSubject = new BehaviorSubject<{ name: string, editing: boolean }[]>([]);
//   tasks$ = this.tasksSubject.asObservable();

//   get tasks() {
//     return this.tasksSubject.getValue();
//   }

//   addTask(task: { name: string, editing: boolean }) {
//     const tasks = this.tasks;
//     tasks.push(task);
//     this.tasksSubject.next(tasks);
//   }

//   updateTask(index: number, task: { name: string, editing: boolean }) {
//     const tasks = this.tasks;
//     tasks[index] = task;
//     this.tasksSubject.next(tasks);
//   }

//   deleteTask(index: number) {
//     const tasks = this.tasks;
//     tasks.splice(index, 1);
//     this.tasksSubject.next(tasks);
//   }
// }