import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showNewTaskForm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleShowForm(): void{
    this.showNewTaskForm = !this.showNewTaskForm;
    this.subject.next(this.showNewTaskForm);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
