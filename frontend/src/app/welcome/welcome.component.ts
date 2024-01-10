import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent{
  name : string = '';

  constructor(private welcomeDataService: WelcomeDataService){
    let user = sessionStorage.getItem('authenticatedUser');
    if(user){
      this.name = user;
    }
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHelloWorldBeanService();
  }
  getWelcomeMessagePathVariable(){
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name);
  }
}
