import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  todos: Todo[];
  message: string = '';

  constructor(
    private todoService: TodoDataService
  ) {
    this.todos = [];
    this.todoService.retrieveAllTodos('username1').subscribe(
      response => {
        this.todos = response
      }
    );


  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('username123',id).subscribe(
      response => {
        this.message = 'Delete Successful!'
      }
    );
  }
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
