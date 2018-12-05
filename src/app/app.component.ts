import { Component } from "@angular/core"
import { MatIconRegistry } from "@angular/material"
import { DomSanitizer } from "@angular/platform-browser"
import { TranslateService } from "@ngx-translate/core"
import { map } from "rxjs/operators"
import { BaseComponent } from "./components/base.component"
import { SettingsApiService } from "./graphql/settings-api.service"
import { setupSvgIcons } from "./setup-svg-icons"

const langs = ["en-US"]

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent extends BaseComponent {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    translate: TranslateService,
    settingsApi: SettingsApiService,
  ) {
    super()
    this.subscribeToTheme(settingsApi, document.body)

    setupSvgIcons(iconRegistry, sanitizer)
    translate.addLangs(langs)
    translate.setDefaultLang("en-US")

    const browserLang = translate.getBrowserCultureLang()
    translate.use(langs.find(lang => lang === browserLang) || "en-US")
  }

  private subscribeToTheme(settingsApi: SettingsApiService, element: HTMLElement): void {
    this.subscriptions.push(
      settingsApi.load().pipe(map(settings => settings.theme)).subscribe(theme => {
        while (element.classList.length > 0) {
          element.classList.remove(element.classList.item(0))
        }
        element.classList.add(`mrobot-${theme}`)
      }),
    )
  }
}
