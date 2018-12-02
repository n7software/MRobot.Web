import { Action } from "@ngrx/store"
import { SettingsActions, SettingsActionTypes } from "./settings.actions"

export type Theme = "light" | "dark"

export interface State {
  theme: Theme
}

export const initialState: State = {
  theme: "dark",
}

export function reducer(state = initialState, action: SettingsActions): State {
  switch (action.type) {

    case SettingsActionTypes.LoadSettings:
      return state

    default:
      return state
  }
}
