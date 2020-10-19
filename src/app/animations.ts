import { trigger, transition, style, animate, sequence } from '@angular/animations'

export const fadeInOutAnimation =
  trigger('fadeInOut', [
    transition('* <=> *', [
      sequence([
        style({ opacity: 0 }),
        animate(150, style({ opacity: 1 }))
      ])
    ])
  ])