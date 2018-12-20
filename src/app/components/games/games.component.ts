import { animate, state, style, transition, trigger } from "@angular/animations"
import { Component } from "@angular/core"
import { MatDialog } from "@angular/material"
import { NewGameDialogComponent } from "./new-game-dialog/new-game-dialog.component"

@Component({
  selector: "mrobot-games",
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.sass"],
})
export class GamesComponent {
  public title = "myGames"
  constructor(private dialog: MatDialog) {}

  public createGame(): void {
    const dialogRef = this.dialog.open(NewGameDialogComponent, {})
  }
}
