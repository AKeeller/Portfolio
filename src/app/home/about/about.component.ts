import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about[icon][title]',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  @Input()
  title: string;

  @Input()
  icon: IconDefinition;

}