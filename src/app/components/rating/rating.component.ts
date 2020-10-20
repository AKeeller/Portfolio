import { Component, Input } from '@angular/core';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'rating[stars]',
  templateUrl: './rating.component.html'
})
export class RatingComponent {

  @Input()
  stars: number

  icons: IconDefinition[] = []

  ngOnInit() {
    for (let i = 0; i < this.stars && i < 5; i++)
      this.icons.push(fasStar)

    for (let i = 0; i < 5 - this.stars; i++)
      this.icons.push(farStar)
  }

}