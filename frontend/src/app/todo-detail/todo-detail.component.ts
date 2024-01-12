import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
  todo: Todo;
  id = 0;
  targetDate: Date = new Date();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoDataService,
    private datePipe: DatePipe
  ) {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      todoService.retrieveTodo('devadmin', this.id).subscribe(
        data => this.todo = data
      )
    }

  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('devadmin', this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/todos']);
        }
      )
    }else{
      this.todoService.updateTodo('devadmin', this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/todos']);
        }
      )
    }
  }

  get formattedDate() {
    if (this.targetDate != null) {
      this.datePipe.transform(this.targetDate, 'yyyy-MM-dd');
    }
    return '';
  }
}
