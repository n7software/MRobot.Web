import { animate, state, style, transition, trigger } from "@angular/animations"
import { Component } from "@angular/core"

@Component({
  selector: "mrobot-games",
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.sass"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateY(0)" })),
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate(100),
      ]),
      transition(":leave", [
        animate(100, style({ transform: "translateY(100%)" })),
      ]),
    ]),
  ],
})
export class GamesComponent {
  constructor() {}
}
