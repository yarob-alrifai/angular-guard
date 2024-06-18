import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
