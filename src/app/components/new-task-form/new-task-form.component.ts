import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';



import {Task} from '../../task';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  @Output() onAddItem: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean;

  showAddTaskForm: boolean = false;
  subscription: Subscription;

    constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTaskForm = val);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text)
      alert('Please enter a task!');
    
    else{

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    this.onAddItem.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

    this.uiService.toggleShowForm();

    }
  }

}
