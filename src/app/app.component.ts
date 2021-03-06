import { Component } from "@angular/core"
import { MatIconRegistry } from "@angular/material"
import { DomSanitizer } from "@angular/platform-browser"
import { ActivatedRouteSnapshot, ActivationEnd, Router } from "@angular/router"
import { TranslateService } from "@ngx-translate/core"
import { Observable } from "rxjs"
import { filter, map } from "rxjs/operators"
import { BaseComponent } from "./components/base.component"
import { GamesApiService } from "./graphql/games-api.service"
import { SettingsApiService } from "./graphql/settings-api.service"
import { setupSvgIcons } from "./setup-svg-icons"

const langs = ["en-US"]

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent extends BaseComponent {
  public activatedRoute$: Observable<ActivatedRouteSnapshot>

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    translate: TranslateService,
    gamesApi: GamesApiService,
    settingsApi: SettingsApiService,
    router: Router,
  ) {
    super()
    this.subscribeToTheme(settingsApi, document.body)
    this.subscribeToRouteData(router)

    setupSvgIcons(iconRegistry, sanitizer)
    translate.addLangs(langs)
    translate.setDefaultLang("en-US")

    const browserLang = translate.getBrowserCultureLang()
    translate.use(langs.find(lang => lang === browserLang) || "en-US")

    gamesApi.list().subscribe()
  }

  private subscribeToTheme(
    settingsApi: SettingsApiService,
    element: HTMLElement,
  ): void {
    this.subscriptions.push(
      settingsApi
        .load()
        .pipe(map(settings => settings.theme))
        .subscribe(theme => {
          while (element.classList.length > 0) {
            element.classList.remove(element.classList.item(0))
          }
          element.classList.add(`mrobot-${theme}`)
        }),
    )
  }

  private subscribeToRouteData(router: Router): void {
    this.activatedRoute$ = router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      map((e: ActivationEnd) => e.snapshot),
    )
  }
}
