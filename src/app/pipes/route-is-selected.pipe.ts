import { Pipe, PipeTransform } from "@angular/core"
import { ActivatedRouteSnapshot } from "@angular/router"

@Pipe({
  name: "routeIsSelected",
})
export class RouteIsSelectedPipe implements PipeTransform {
  public transform(value: ActivatedRouteSnapshot, route?: string): boolean {
    return (
      value &&
      value.url &&
      value.url.length &&
      route &&
      value.url[0].path === route
    )
  }
}
