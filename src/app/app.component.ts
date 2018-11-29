import { Component } from "@angular/core"
import { MatIconRegistry } from "@angular/material"
import { DomSanitizer } from "@angular/platform-browser"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "mrobot-full",
      sanitizer.bypassSecurityTrustResourceUrl("assets/mrobot-full.svg"),
    )
    iconRegistry.addSvgIcon(
      "mrobot",
      sanitizer.bypassSecurityTrustResourceUrl("assets/mrobot.svg"),
    )
    iconRegistry.addSvgIcon(
      "games",
      sanitizer.bypassSecurityTrustResourceUrl("assets/games.svg"),
    )
  }
}
