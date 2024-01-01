import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, provideRouter } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username : String = ''
  password : string = ''
  invalidLogin: boolean = false
  errorMessage: string = ''


  constructor(private router: Router){}

  handleLogin(){
    this.errorMessage = ''
    this.invalidLogin = false;

    if(this.username == 'devadmin' && this.password == 'welkom01' ){
      this.router.navigate(['welcome']);
    }else{
      this.errorMessage = 'Invalid Credentials';
      this.invalidLogin = true;
    }
  }
}
