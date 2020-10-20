import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'chapter[title]',
  templateUrl: './chapter.component.html',
  styleUrls: ['chapter.component.css']
})
export class ChapterComponent {

  @Input()
  title: string;

  @Input()
  icon: IconDefinition;

  @Input()
  image: string;

}