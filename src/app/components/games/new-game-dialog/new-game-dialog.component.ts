import { Component, OnInit, ViewChild } from "@angular/core"
import { NgForm } from "@angular/forms"
import { MatDialogRef } from "@angular/material"
import { values } from "lodash"

import { GAMES } from "src/app/data"

@Component({
  selector: "mrobot-new-game-dialog",
  templateUrl: "./new-game-dialog.component.html",
  styleUrls: ["./new-game-dialog.component.sass"],
})
export class NewGameDialogComponent {
  @ViewChild("newGameForm")
  public form: NgForm

  public games = values(GAMES)

  constructor(private dialogRef: MatDialogRef<NewGameDialogComponent>) {}

  public onOkClick(): void {}

  public onCancelClick(): void {
    this.dialogRef.close()
  }
}
