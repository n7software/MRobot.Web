import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"
import { Component } from "@angular/core"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"

@Component({
  selector: "mrobot-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.sass"],
})
export class NavComponent {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(private breakpointObserver: BreakpointObserver) {}
}
