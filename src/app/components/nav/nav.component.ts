import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"
import { Location } from "@angular/common"
import { Component, ViewChild } from "@angular/core"
import { MatSidenav } from "@angular/material"
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  Router,
} from "@angular/router"
import { Observable, of } from "rxjs"
import { filter, first, map, tap } from "rxjs/operators"

@Component({
  selector: "mrobot-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.sass"],
})
export class NavComponent {
  public currentComponent: any

  public navItems = [
    { title: "myGames", route: "games", icon: "games" },
    { title: "publicGames", route: "public-games", icon: "dns" },
    { title: "community", route: "community", icon: "account-group" },
    {
      title: "desktopApp",
      route: "desktop-app",
      icon: "monitor",
      divider: true,
    },
    { title: "boost", route: "boost", icon: "eureka" },
    { title: "settings", route: "settings", icon: "settings" },
    { title: "help", route: "help", icon: "information" },
    { title: "admin", route: "admin", icon: "security", divider: true },
  ]

  public activatedRoute$: Observable<ActivatedRouteSnapshot>

  @ViewChild("drawer")
  public drawer: MatSidenav

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(
    private breakpointObserver: BreakpointObserver,
    private location: Location,
    router: Router,
  ) {
    this.activatedRoute$ = router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      tap(() =>
        this.isHandset$
          .pipe(
            first(),
            filter(isHandset => isHandset),
          )
          .subscribe(() => this.drawer.close()),
      ),
      map((e: ActivationEnd) => e.snapshot),
    )
  }

  public goBack(): void {
    this.location.back()
  }
}
