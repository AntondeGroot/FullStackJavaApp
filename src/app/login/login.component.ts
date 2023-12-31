import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, provideRouter } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username : string = ''
  password : string = ''
  invalidLogin: boolean = false
  errorMessage: string = ''


  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService){}

  handleLogin(){
    this.errorMessage = ''
    this.invalidLogin = false;

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username]);
    }else{
      this.errorMessage = 'Invalid Credentials';
      this.invalidLogin = true;
    }
  }
}
