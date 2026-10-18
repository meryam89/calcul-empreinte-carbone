import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    public user: User,
    private router: Router,
  ) {}

  getUsername(): string {
    return this.user.getUsername();
  }
  logout(): void {
    this.user.logout();
    this.router.navigate(['/home']);
  }
}

