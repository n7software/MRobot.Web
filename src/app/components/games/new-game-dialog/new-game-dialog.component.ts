import { Component, OnInit, ViewChild } from "@angular/core"
import { NgForm } from "@angular/forms"
import { MatDialogRef } from "@angular/material"
import { values } from "lodash"

import { Game, GAMES } from "src/app/data"

@Component({
  selector: "mrobot-new-game-dialog",
  templateUrl: "./new-game-dialog.component.html",
  styleUrls: ["./new-game-dialog.component.sass"],
})
export class NewGameDialogComponent {
  @ViewChild("newGameForm")
  public form: NgForm

  public games = values(GAMES)

  public name: string
  public selectedGame: Game

  constructor(private dialogRef: MatDialogRef<NewGameDialogComponent>) {}

  public onOkClick(): void {
    this.dialogRef.close({
      name: this.name,
      gameType: this.selectedGame.id,
    })
  }

  public onCancelClick(): void {
    this.dialogRef.close()
  }
}
