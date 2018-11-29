import { Component } from "@angular/core"
import { MatIconRegistry } from "@angular/material"
import { DomSanitizer } from "@angular/platform-browser"
import { TranslateService } from "@ngx-translate/core"
import { setupSvgIcons } from "./setup-svg-icons"

const langs = ["en-US"]

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    translate: TranslateService,
  ) {
    setupSvgIcons(iconRegistry, sanitizer)
    translate.addLangs(langs)
    translate.setDefaultLang("en-US")

    const browserLang = translate.getBrowserCultureLang()
    translate.use(langs.find(lang => lang === browserLang) || "en-US")
  }
}
