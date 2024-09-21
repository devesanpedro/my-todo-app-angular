import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  title: string = '';
  description: string = '';

  @Output() create = new EventEmitter<{title: string, description: string}>();
  @Output() cancel = new EventEmitter<void>();

  constructor() {

  }

  onSubmit() {
    const newTask = {
      title: this.title,
      description: this.description
    };

    this.create.emit(newTask);
  }

  onCancel() {
    this.cancel.emit();
  }
}
