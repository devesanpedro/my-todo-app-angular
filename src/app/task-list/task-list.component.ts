import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskAddComponent } from "../task-add/task-add.component";

const dummyTasks = [
  {
    id: 't1',
    title: "Introduction to Angular",
    description: "Learn the basics of Angular, including its architecture, key features, and how it differs from other front-end frameworks.",
    completed: false
  },
  {
    id: 't2',
    title: "Angular Components",
    description: "Dive into Angular components, exploring how to create, use, and manage components within an Angular application.",
    completed: false
  },
  {
    id: 't3',
    title: "Angular Directives",
    description: "Understand the different types of Angular directives, including structural and attribute directives, and how to use them to manipulate the DOM.",
    completed: false
  },
]

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, TaskAddComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks = dummyTasks;
  isAddTaskVisible = false;

  constructor() {

  }

  onAddTask() {
    this.isAddTaskVisible = true;
  }

  onCancelTask() {
    this.isAddTaskVisible = false;
  }

  onCreateTask({title, description}: {title: string, description: string}) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: title,
      description: description,
      completed: false
    });

    this.isAddTaskVisible=false;
  }

  onRemoveTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.map((task) => task.id === id ? { ...task, completed: true} : task);
  }
}
