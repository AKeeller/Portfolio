import { Component, Input } from '@angular/core'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'big-title',
  templateUrl: './big-title.component.html',
  standalone: false
})
export class BigTitleComponent {

  @Input()
  icon: IconDefinition

}