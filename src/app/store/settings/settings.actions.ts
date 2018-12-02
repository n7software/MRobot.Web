import { Action } from "@ngrx/store"

export enum SettingsActionTypes {
  LoadSettings = "[Settings] Load Settings",
  LoadSettingsSuccess = "[Settings] Load Settings Success",
  LoadSettingsFailure = "[Settings] Load Settings Failure",
}

export class LoadSettings implements Action {
  public readonly type = SettingsActionTypes.LoadSettings
}

export type SettingsActions = LoadSettings
