import { Component, OnInit } from '@angular/core';


import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-configurecard',
  templateUrl: './configurecard.component.html',
  styleUrls: ['./configurecard.component.css']
})
export class ConfigurecardComponent implements OnInit {
  longText:string = 'Select the fields you want to view';

  task: Task = {
    name: 'View All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'id', completed: false, color: 'primary'},
      {name: 'ENTITY_TYPE_NAME', completed: false, color: 'primary'},
      {name: 'UPSTREAM_APP', completed: false, color: 'primary'},
      {name: 'COMPANY_NAME', completed: false, color: 'primary'},
      {name: 'UPSTREAM_ALIAS', completed: false, color: 'primary'},
      {name: 'DOWNSTREAM_APP', completed: false, color: 'primary'},
      {name: 'DOWNSTREAM_ALIAS', completed: false, color: 'primary'},
      {name: 'INSTRUMENT_NAME', completed: false, color: 'primary'},
      {name: 'INSTRUMENT_ID', completed: false, color: 'primary'},
      {name: 'UPDATED_BY', completed: false, color: 'primary'},
      {name: 'UPDATED_DATE', completed: false, color: 'primary'},
      {name: 'IS_ACTIVE', completed: false, color: 'primary'}
    ],
  };
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("submit card");
    console.log(this.task);
    this.router.navigate(['/viewtable/Company_Alias', {tasks:JSON.stringify(this.task)}]);
  }

}
