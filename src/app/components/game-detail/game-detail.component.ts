import { Component, OnInit } from "@angular/core"

@Component({
  selector: "mrobot-game-detail",
  templateUrl: "./game-detail.component.html",
  styleUrls: ["./game-detail.component.sass"],
})
export class GameDetailComponent implements OnInit {
  public showBack = true
  public flatAppBar = true
  constructor() {}

  public ngOnInit() {}
}
