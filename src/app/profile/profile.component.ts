import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute) {}

  name: string | null = '';
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }
}
