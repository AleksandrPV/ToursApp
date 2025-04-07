import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserStorageKey } from '../../models/IUser';

export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);
  
  const isAuth: boolean = false;
  const isSessionStorageLogin = !!sessionStorage.getItem(UserStorageKey)
  let isAuthResult: boolean = false;
  
  if (!isSessionStorageLogin) {
    const isAuth = !!userService.getUser()
    if (!isAuth) {
      router.navigate(['auth']);
    }
  }
  if (isSessionStorageLogin || isAuth) {
    isAuthResult = true;
  }
  return isAuthResult;
};
