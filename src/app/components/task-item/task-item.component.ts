import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Task} from '../../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onRemoveItem: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(task: Task){
    this.onRemoveItem.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

}
