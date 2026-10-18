import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private username = signal('');

  login(username: string): void {
    this.username.set(username);
  }

  logout(): void {
    this.username.set('');
  }

  getUsername(): string {
    return this.username();
  }
}
