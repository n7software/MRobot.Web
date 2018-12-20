import { formatDate } from "@angular/common"
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "hour",
})
export class HourPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  public transform(value: number): string {
    return formatDate(new Date(2000, 0, 1, value), "h a", this.locale)
  }
}
