import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';<% if (includeChild) { %>
import { ChildComponent } from './child.component';<% } %>

@NgModule({
    imports:      [ 
        BrowserModule 
    ],
    declarations: [ 
        AppComponent<% if (includeChild) { %>,
        ChildComponent<% } %>
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
