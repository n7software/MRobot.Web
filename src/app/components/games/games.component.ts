import { Component } from "@angular/core"
import { MatDialog } from "@angular/material"
import { Observable } from "rxjs"
import { GamesApiService } from "src/app/graphql/games-api.service"
import { ListGames_games } from "src/app/models"
import { NewGameDialogComponent } from "./new-game-dialog/new-game-dialog.component"

@Component({
  selector: "mrobot-games",
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.sass"],
})
export class GamesComponent {
  public title = "myGames"
  public loading = false
  public games$: Observable<ListGames_games[]>
  constructor(private dialog: MatDialog, private gamesApi: GamesApiService) {
    this.games$ = gamesApi.listCached()
  }

  public createGame(): void {
    const dialogRef = this.dialog.open(NewGameDialogComponent, {
      width: "350px",
    })
    dialogRef.afterClosed().subscribe(result => {
      this.loading = true
      this.gamesApi.create(result).subscribe(() => (this.loading = false))
    })
  }
}
