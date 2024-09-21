import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
 @Input({ required: true}) id: string = '';
 @Input({ required: true}) title: string = '';
 @Input({ required: true}) description: string = '';
 @Input({ required: true}) completed: boolean = false;
 @Output() remove = new EventEmitter<string>();
 @Output() complete = new EventEmitter<string>();

 onRemove() {
  this.remove.emit(this.id);
 }

 onComplete() {
  this.complete.emit(this.id);
 }

}
