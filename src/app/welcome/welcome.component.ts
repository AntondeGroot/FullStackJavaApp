import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent{
  name : string = '';

  constructor(){
    let user = sessionStorage.getItem('authenticatedUser');
    if(user){
      this.name = user;
    }
  }
}
