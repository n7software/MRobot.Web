import { Component } from "@angular/core"
import { Observable } from "rxjs"
import { SettingsApiService } from "src/app/graphql/settings-api.service"
import { Settings } from "src/app/models"
import { BaseComponent } from "../base.component"

@Component({
  selector: "mrobot-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.sass"],
})
export class SettingsComponent extends BaseComponent {
  public settings$: Observable<Settings>

  constructor(private settingsApi: SettingsApiService) {
    super()
    setTimeout(() => this.settings$ = settingsApi.load())
  }

  public save(settings: Settings): void {
    this.settingsApi.save(settings)
  }
}
