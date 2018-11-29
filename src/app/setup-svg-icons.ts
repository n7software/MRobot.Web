import { MatIconRegistry } from "@angular/material"
import { DomSanitizer } from "@angular/platform-browser"

export const icons = {
  "mrobot-full": "assets/mrobot-full.svg",
  "mrobot": "assets/mrobot.svg",
  "games": "assets/games.svg",
}

export function setupSvgIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
  Object.keys(icons).forEach(name =>
    iconRegistry.addSvgIcon(
      name,
      sanitizer.bypassSecurityTrustResourceUrl(icons[name]),
    ))
}
