import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'logout', component: LogoutComponent,canActivate: [authGuard]},
    {path:'welcome', component: WelcomeComponent, canActivate: [authGuard]},
    {path:'welcome/:name', component: WelcomeComponent, canActivate: [authGuard]},
    {path:'todos', component: ListTodosComponent, canActivate: [authGuard]},
    {path:'todos/:id', component: TodoDetailComponent, canActivate: [authGuard]},
    {path:'**', component: ErrorComponent}
];
