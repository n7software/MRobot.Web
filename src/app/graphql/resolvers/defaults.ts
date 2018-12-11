export const defaults = {
  settings: {
    __typename: "Settings",
    vacationMode: false,
    country: null,
    availableHours: [],
    theme: "dark",
    emailAddress: null,
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
