import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: "mrobot-discord",
  template: "<h1>{{ 'authorizingDiscord' | translate }}</h1>",
})
export class DiscordComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParamMap.get("error")) {
      this.router.navigate(["settings"])
    }
  }
}
