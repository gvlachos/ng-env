import { Component } from '@angular/core';

declare global {
  const ENVIRONMENT_NAME: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly env: string = typeof(ENVIRONMENT_NAME) === 'string' ? ENVIRONMENT_NAME : 'development';

  constructor() {
    console.log('Environment:', this.env);
  }
}
