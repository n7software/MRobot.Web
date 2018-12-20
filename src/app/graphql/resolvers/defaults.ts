export const defaults = {
  settings: {
    __typename: "Settings",
    vacationMode: false,
    country: null,
    availableHours: [],
    theme: "DARK",
    emailAddress: null,
    discordConnected: false,
    discord: {
      __typename: "DiscordSettings",
      showOnProfile: false,
      joinGDM: true,
    },
    notifications: {
      __typename: "NotificationSettings",
      gameInvitations: [],
      playerJoinedGame: [],
      turn: [],
      gameEnded: [],
      turnTimerModified: [],
      skipped: [],
      comment: [],
      privateMessage: [],
    },
  },
}
