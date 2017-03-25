import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
  title: string = "Demo Angular <%= angularVersion %>.x  Application";
  <%_ if (angularVersion == 4) { -%>
  items: string[] = ["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu"];
  <%_ } else if (angularVersion == 2) { -%>
  message: string = "This application demonstrates the rendering of a title and a basic message.";
  <%_ } -%>
}