import { animate, state, style, transition, trigger } from "@angular/animations"
import { Component } from "@angular/core"

@Component({
  selector: "mrobot-games",
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.sass"],
})
export class GamesComponent {
  public title = "myGames"
  constructor() {}

  public createGame(): void {
    
  }
}
