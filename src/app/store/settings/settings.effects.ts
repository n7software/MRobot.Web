import { Injectable } from "@angular/core"
import { Actions, Effect, ofType } from "@ngrx/effects"
import { SettingsActionTypes } from "./settings.actions"

@Injectable()
export class SettingsEffects {

  @Effect()
  public loadFoos$ = this.actions$.pipe(ofType(SettingsActionTypes.LoadSettings))

  constructor(private actions$: Actions) {}
}
