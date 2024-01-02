import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  authenticatedUserLabel : string = 'authenticatedUser';

  constructor(private router: Router) { }

  authenticate(username: string, password: string): boolean {
    if (username == 'devadmin' && password == 'welkom01') {
      sessionStorage.setItem(this.authenticatedUserLabel, username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(this.authenticatedUserLabel);
    if (user) {
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem(this.authenticatedUserLabel);
    this.router.navigate(['']);
  }
}
