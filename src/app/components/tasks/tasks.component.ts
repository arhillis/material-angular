import { Component, Input, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import { UiService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

import {Task} from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showAddTaskForm: boolean = false;
  subscription: Subscription;

  constructor(private taskService: TaskService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTaskForm = val);
  }
  

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  removeItem(task: Task){    
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(tsk => tsk.id !== task.id));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addItem(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }

}
