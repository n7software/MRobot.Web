import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { SettingsApiService } from "src/app/graphql/settings-api.service"

@Component({
  selector: "mrobot-discord",
  template: "<h1>{{ 'authorizingDiscord' | translate }}</h1>",
})
export class DiscordComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private settingsApi: SettingsApiService,
  ) {}

  public ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParamMap.get("error")) {
      this.navigate()
    } else if (this.activatedRoute.snapshot.queryParamMap.get("code")) {
      this.settingsApi.completeDiscordConnection(
        this.activatedRoute.snapshot.queryParamMap.get("code"),
      ).subscribe(() => this.navigate())
    }
  }

  private navigate(): void {
    this.router.navigate(["settings"], { replaceUrl: true })
  }
}
