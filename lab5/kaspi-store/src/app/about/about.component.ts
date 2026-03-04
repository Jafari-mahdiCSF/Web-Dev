import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About Album Browser</h1>
      <p>This application is built with Angular for the Web Development Lab 6: Routing & HTTP.</p>
      <p>It uses the JSONPlaceholder API to fetch album and photo data.</p>
      <p><strong>Developer:</strong> Your Name</p>
      <p><strong>Course:</strong> Web Development</p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>View all albums</li>
        <li>View album details</li>
        <li>Edit album titles</li>
        <li>Delete albums</li>
        <li>View photos for each album</li>
      </ul>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 0.5rem;
    }
    ul {
      margin-left: 1.5rem;
    }
  `]
})
export class AboutComponent { }
