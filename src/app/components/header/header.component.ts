import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTaskForm: boolean = false;
  subscription: Subscription;
  //@Output() onAddTaskToggle = new EventEmitter();
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(val => this.showAddTaskForm = val);
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleShowForm();
  }
}
