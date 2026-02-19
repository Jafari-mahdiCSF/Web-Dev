import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="card">
      <h2>About</h2>
      <p>
        This app is a fast scaffold to match most "Learn Angular" tutorial steps:
      </p>
      <ul>
        <li>Components + templates</li>
        <li>Directives (*ngIf/*ngFor)</li>
        <li>Signals + computed</li>
        <li>Routing</li>
        <li>Services + DI</li>
        <li>HTTP (mock API file)</li>
        <li>Template-driven forms</li>
      </ul>
    </section>
  `,
  styles: [`
    .card { border: 1px solid #e7e7e7; border-radius: 16px; padding: 16px; background: #fff; }
  `],
})
export class AboutComponent {}

