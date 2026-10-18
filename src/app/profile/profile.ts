import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('name') || '';
  }
}
