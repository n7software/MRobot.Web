import { Pipe, PipeTransform } from "@angular/core"
import { ActivatedRouteSnapshot } from "@angular/router"

@Pipe({
  name: "showNav",
})
export class ShowNavPipe implements PipeTransform {
  public transform(value: ActivatedRouteSnapshot): boolean {
    if (value && value.data && typeof(value.data.hideNav) === "boolean") {
      return !value.data.hideNav
    } else {
      return true
    }
  }
}
