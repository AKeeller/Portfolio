import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about[title]',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  @Input()
  title: string;

  @Input()
  icon: IconDefinition;

  @Input()
  image: string;

}