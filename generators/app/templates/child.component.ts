import {Component, Input} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'app/views/child.component.html'
})
export class ChildComponent {
    @Input()
    <%_ if (angularVersion == 4) { -%>
    content: string;
    <%_ } else if (angularVersion == 2) { -%>
    body: string;
    <%_ } -%>
    <%_ if (angularVersion == 4) { -%>
    @Input()
    label: number;
    <%_ } -%>
}