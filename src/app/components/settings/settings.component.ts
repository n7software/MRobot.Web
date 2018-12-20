import { Component, ViewChild } from "@angular/core"
import { NgForm } from "@angular/forms"
import { MatSlideToggleChange } from "@angular/material"
import { filter, mapValues, range, values } from "lodash"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { SettingsApiService } from "src/app/graphql/settings-api.service"
import { LoadSettings_settings, Notifier } from "src/app/models"
import { CountryService } from "src/app/services/country.service"
import { BaseComponent } from "../base.component"

const discordAuthUrl =
  "https://discordapp.com/api/oauth2/authorize" +
  "?client_id=520715807374704640" +
  `&redirect_uri=${encodeURIComponent(window.location.origin)}%2Fdiscord` +
  "&response_type=code" +
  "&scope=identify%20gdm.join"

@Component({
  selector: "mrobot-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.sass"],
})
export class SettingsComponent extends BaseComponent {
  public title = "settings"
  public settings$: Observable<LoadSettings_settings>

  @ViewChild("settingsForm")
  public form: NgForm
  public initialFormValue: any

  public toggleNgModels: { [key: string]: string[] } = {}

  public emailNotifications: boolean

  public countries = this.countryService.countryList

  public hours = range(24)

  constructor(
    private settingsApi: SettingsApiService,
    private countryService: CountryService,
  ) {
    super()
    setTimeout(
      () =>
        (this.settings$ = settingsApi.load().pipe(
          tap(settings => {
            this.emailNotifications = !!settings.emailAddress
            setTimeout(() => this.setupFormInitialState())
          }),
        )),
    )
  }

  private setupFormInitialState(): void {
    this.initialFormValue = this.form.value
    this.form.reset(this.initialFormValue)
  }

  public onEmailNotificationsChanged(
    event: MatSlideToggleChange,
    settings: LoadSettings_settings,
  ): void {
    const typename = (settings.notifications as any).__typename
    delete (settings.notifications as any).__typename
    if (event.checked) {
      settings.notifications = mapValues(settings.notifications, notifiers => [
        ...(notifiers || []),
        Notifier.EMAIL,
      ])
    } else {
      settings.notifications = mapValues(
        settings.notifications,
        notifiers => notifiers && filter(notifiers, n => n !== Notifier.EMAIL),
      )
    }
    ;(settings.notifications as any).__typename = typename
  }

  public onDiscordClick(settings: LoadSettings_settings): void {
    if (!settings.discordConnected) {
      window.location.href = discordAuthUrl
    } else {
      this.settingsApi.disconnectDiscord().subscribe()
    }
  }

  public save(settings: LoadSettings_settings): void {
    if (this.form.valid) {
      settings.emailAddress = this.emailNotifications
        ? settings.emailAddress
        : null
      this.settingsApi
        .save(settings)
        .subscribe(() => this.setupFormInitialState(), () => {})
    }
  }
}
