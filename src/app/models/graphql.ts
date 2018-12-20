/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoadSettings
// ====================================================

export interface LoadSettings_settings_discord {
  showOnProfile: boolean | null
  joinGDM: boolean | null
}

export interface LoadSettings_settings_notifications {
  gameInvitations: (Notifier | null)[] | null
  playerJoinedGame: (Notifier | null)[] | null
  turn: (Notifier | null)[] | null
  gameEnded: (Notifier | null)[] | null
  turnTimerModified: (Notifier | null)[] | null
  skipped: (Notifier | null)[] | null
  comment: (Notifier | null)[] | null
  privateMessage: (Notifier | null)[] | null
}

export interface LoadSettings_settings {
  vacationMode: boolean | null
  country: string | null
  availableHours: (number | null)[] | null
  theme: Theme | null
  emailAddress: string | null
  discordConnected: boolean | null
  discord: LoadSettings_settings_discord | null
  notifications: LoadSettings_settings_notifications | null
}

export interface LoadSettings {
  settings: LoadSettings_settings | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SaveSettings
// ====================================================

export interface SaveSettings_saveSettings {
  clientMutationId: string | null
}

export interface SaveSettings {
  saveSettings: SaveSettings_saveSettings | null
}

export interface SaveSettingsVariables {
  clientMutationId?: string | null
  input?: SettingsInput | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CompleteDiscordConnection
// ====================================================

export interface CompleteDiscordConnection_completeDiscordConnection {
  clientMutationId: string | null
}

export interface CompleteDiscordConnection {
  completeDiscordConnection: CompleteDiscordConnection_completeDiscordConnection | null
}

export interface CompleteDiscordConnectionVariables {
  clientMutationId?: string | null
  code: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DisconnectDiscord
// ====================================================

export interface DisconnectDiscord_disconnectDiscord {
  clientMutationId: string | null
}

export interface DisconnectDiscord {
  disconnectDiscord: DisconnectDiscord_disconnectDiscord | null
}

export interface DisconnectDiscordVariables {
  clientMutationId?: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Theme {
  DARK = "DARK",
  KING_DARK = "KING_DARK",
  KING_LIGHT = "KING_LIGHT",
  LIGHT = "LIGHT",
}

export enum Notifier {
  DISCORD = "DISCORD",
  EMAIL = "EMAIL",
}

//
export interface SettingsInput {
  vacationMode?: boolean | null
  country?: string | null
  availableHours?: (number | null)[] | null
  theme: Theme
  emailAddress?: string | null
  notifications?: NotificationSettingsInput | null
}

//
export interface NotificationSettingsInput {
  gameInvitations?: (Notifier | null)[] | null
  playerJoinedGame?: (Notifier | null)[] | null
  turn?: (Notifier | null)[] | null
  gameEnded?: (Notifier | null)[] | null
  turnTimerModified?: (Notifier | null)[] | null
  skipped?: (Notifier | null)[] | null
  comment?: (Notifier | null)[] | null
  privateMessage?: (Notifier | null)[] | null
}

//==============================================================
// END Enums and Input Objects
//==============================================================
