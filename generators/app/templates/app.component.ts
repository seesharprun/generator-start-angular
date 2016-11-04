import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  title: string = "Demo Application";
  message: string = "This application demonstrates the rendering of a title and a basic message."
}