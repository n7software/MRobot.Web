import { Pipe, PipeTransform } from "@angular/core"
import { ActivatedRouteSnapshot } from "@angular/router"

@Pipe({
  name: "titleFromRouteData",
})
export class TitleFromRouteDataPipe implements PipeTransform {
  public transform(value: ActivatedRouteSnapshot): string {
    return (value && value.data && value.data.title) || "loading"
  }
}
