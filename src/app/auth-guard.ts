import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private user: User, private router: Router) {}

  canActivate(): boolean {
    const isLogged = this.user.getUsername() !== '';

    if (isLogged) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
