import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent{
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ){
    this.hardcodedAuthenticationService.logout();
  }
}
