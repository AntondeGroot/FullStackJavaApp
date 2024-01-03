import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticatedUser = sessionStorage.getItem('authenticatedUser');
  const router = inject(Router);
  
  if(authenticatedUser){
    return true;
  }
  router.navigate(['login']);
  return false;
};
