import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"
import { Component, ViewChild } from "@angular/core"
import { MatSidenav } from "@angular/material"
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  Data,
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
  public activatedRoute$: Observable<ActivatedRouteSnapshot>

  @ViewChild("drawer")
  public drawer: MatSidenav

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(private breakpointObserver: BreakpointObserver, router: Router) {
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
}
