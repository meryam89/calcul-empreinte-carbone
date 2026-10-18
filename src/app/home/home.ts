import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    public user: User,
    private router: Router,
  ) {}

  async login(): Promise<void> {
    this.user.login('Jean');
    await this.router.navigate(['/summary']);
  }
}
