import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Manager Dashboard</h1><p>Welcome to TimeTrack.</p>`
})
export class DashboardComponent { }