import {Component, Input} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'app/views/child.component.html'
})
export class ChildComponent {
    @Input()
    content: string;
    @Input()
    label: number;
}