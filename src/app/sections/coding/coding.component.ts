import { Component } from '@angular/core';
import {
  faTerminal, faAward, faThumbsUp, faBook, faNetworkWired, faDesktop, faPaintBrush, faSquareRootAlt, faGlobeAmericas, faServer, faDraftingCompass, faTools, faKey, faFeatherAlt, faPhotoVideo
} from '@fortawesome/free-solid-svg-icons'

import { faGitAlt } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent {

  faTerminal = faTerminal
  faAward = faAward
  faThumbsUp = faThumbsUp
  faBook = faBook
  faDraftingCompass = faDraftingCompass
  faNetworkWired = faNetworkWired
  faDesktop = faDesktop
  faPaintBrush = faPaintBrush
  faSquareRootAlt = faSquareRootAlt
  faGlobeAmericas = faGlobeAmericas
  faServer = faServer
  faTools = faTools
  faGitAlt = faGitAlt
  faKey = faKey
  faFeatherAlt = faFeatherAlt
  faPhotoVideo = faPhotoVideo

  languages = {
    "Bash": 4,
    "C": 4,
    "C#": 3,
    "Erlang": 2,
    "F#": 2,
    "Java": 4,
    "LaTeX": 3,
    "Objective-C": 3,
    "OCaml": 2,
    "PHP": 1,
    "Scala": 2,
    "Swift": 4.5,
    "TypeScript": 3.5
  }

}
