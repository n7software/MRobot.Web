import { Component, Input } from "@angular/core"

@Component({
  selector: "mrobot-setting-row",
  templateUrl: "./setting-row.component.html",
  styleUrls: ["./setting-row.component.sass"],
})
export class SettingRowComponent {
  @Input()
  public title: string

  @Input()
  public description: string
}
