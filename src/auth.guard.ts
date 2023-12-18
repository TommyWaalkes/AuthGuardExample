import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './app/user.service';


export const AuthenticationGuard: CanActivateFn = (route, state) => {
  console.log('authgaurd')
  let userService = inject(UserService); 

    return userService.loggedIn; 

  //if (userService.currentUser.firstName != "")
  //return inject(Router).createUrlTree(['/']);
  //else return inject(Router).navigate(["home"])

};