export type Notifier = "discord" | "email"

export interface DiscordSettings {
  showOnProfile: boolean
  joinGDM: boolean
}

export interface NotificationSettings {
  gameInvitations: Notifier[]
  playerJoinedGame: Notifier[]
  turn: Notifier[]
  gameEnded: Notifier[]
  turnTimerModified: Notifier[]
  skipped: Notifier[]
  comment: Notifier[]
  privateMessage: Notifier[]
}

export interface SettingsInput {
  theme: "DARK" | "LIGHT" | "KING_DARK" | "KING_LIGHT"
  vacationMode: boolean
  country: string
  availableHours: number[]
  emailAddress: string
  discordConnected: boolean
  discord: DiscordSettings
  notifications: NotificationSettings
}

export interface Settings extends SettingsInput {
  discordConnected: boolean
}
