import { Component, Input } from '@angular/core'

import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as fasStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'rating[stars]',
  templateUrl: './rating.component.html'
})
export class RatingComponent {

  @Input()
  stars: number

  icons: IconDefinition[] = []

  ngOnInit() {
    let maxStars = 5

    if (this.stars > maxStars)
      this.stars = maxStars

    else if (this.stars < 0)
      this.stars = 0

    for (let i = 0; i < Math.floor(this.stars); i++)
      this.icons.push(fasStar)

    if (this.stars % 1 !== 0)
      this.icons.push(faStarHalfAlt)

    for (let i = 0; i < maxStars - Math.ceil(this.stars); i++)
      this.icons.push(farStar)
  }

}