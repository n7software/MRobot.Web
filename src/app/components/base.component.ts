import { OnDestroy } from "@angular/core"
import { Subscription } from "rxjs"

export class BaseComponent implements OnDestroy {
  protected subscriptions: Subscription[] = []

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }
}
