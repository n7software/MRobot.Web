export type Notifier = "discord" | "email"

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

export interface Settings {
  theme: "DARK" | "LIGHT" | "KING_DARK" | "KING_LIGHT"
  vacationMode: boolean
  country: string
  availableHours: number[]
  emailAddress: string
  notifications: NotificationSettings
}
