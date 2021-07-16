import { Component } from '@angular/core';

@Component({
  // selector is added in the index.html - which displays contents of the app.component.html for the corresponding component..
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GORBOX';
}
