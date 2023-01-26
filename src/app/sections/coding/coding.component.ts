import { Component } from '@angular/core'
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

  languages: [string, number, URL][] = [
    ["Bash", 4, new URL("https://www.gnu.org/software/bash/")],
    ["C", 4, new URL("https://www.gnu.org/software/gnu-c-manual/")],
    ["C#", 3, new URL("https://docs.microsoft.com/dotnet/csharp/")],
    ["Erlang", 2, new URL("https://www.erlang.org")],
    ["F#", 2, new URL("https://fsharp.org")],
    ["Java", 4, new URL("https://java.com")],
    ["LaTeX", 3, new URL("https://www.latex-project.org")],
    ["Objective-C", 3, new URL("https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html")],
    ["OCaml", 2, new URL("https://ocaml.org")],
    ["PHP", 1, new URL("https://www.php.net")],
    ["Scala", 2, new URL("https://www.scala-lang.org")],
    ["Swift", 4.5, new URL("https://developer.apple.com/swift/")],
    ["TypeScript", 3.5, new URL("https://www.typescriptlang.org")]
  ]

}
