import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  
  todos = [
    new Todo(1,'Learn to dance',false, new Date()),
    new Todo(2,'Migrate to the south for winter',false, new Date()),
    new Todo(3,'Hibernate',false, new Date()),
    new Todo(4,'Learn to whistle',false, new Date()),
    new Todo(5,'Learn to talk hive',true, new Date()),
  ]
}
export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}
