/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListGames
// ====================================================

export interface ListGames_games_turns_player_user {
  id: string | null
}

export interface ListGames_games_turns_player {
  user: ListGames_games_turns_player_user | null
}

export interface ListGames_games_turns {
  player: ListGames_games_turns_player | null
}

export interface ListGames_games {
  id: string
  name: string
  gameType: GameType
  customGameType: string | null
  description: string | null
  turns: (ListGames_games_turns | null)[] | null
}

export interface ListGames {
  games: (ListGames_games | null)[] | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGame
// ====================================================

export interface GetGame_game_host {
  id: string | null
}

export interface GetGame_game_players_user {
  id: string | null
}

export interface GetGame_game_players {
  user: GetGame_game_players_user | null
}

export interface GetGame_game_turns_player_user {
  id: string | null
}

export interface GetGame_game_turns_player {
  user: GetGame_game_turns_player_user | null
}

export interface GetGame_game_turns {
  player: GetGame_game_turns_player | null
  startedAt: GQL_DateTime
  finishedAt: GQL_DateTime | null
  expiresAt: GQL_DateTime | null
}

export interface GetGame_game {
  id: string
  name: string
  gameType: GameType
  customGameType: string | null
  parseCivs: boolean
  description: string | null
  createdAt: GQL_DateTime
  startedAt: GQL_DateTime | null
  finishedAt: GQL_DateTime | null
  hasMods: boolean
  showInPublic: boolean
  joinFilter: (JoinFilter | null)[]
  slotLimit: number | null
  turnTimerEnabled: boolean
  turnTimerDays: number | null
  createdFromSave: boolean
  multiSlotJoinAllowed: boolean
  host: GetGame_game_host | null
  players: (GetGame_game_players | null)[] | null
  turns: (GetGame_game_turns | null)[] | null
}

export interface GetGame {
  game: GetGame_game | null
}

export interface GetGameVariables {
  id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateGame
// ====================================================

export interface CreateGame_createGame_game {
  id: string
  createdAt: GQL_DateTime
  createdFromSave: boolean
}

export interface CreateGame_createGame {
  clientMutationId: string | null
  game: CreateGame_createGame_game
}

export interface CreateGame {
  createGame: CreateGame_createGame | null
}

export interface CreateGameVariables {
  clientMutationId?: string | null
  input: GameInput
}

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
  input: SettingsInput
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

export enum GameType {
  CIVILIZATION_BE = "CIVILIZATION_BE",
  CIVILIZATION_V = "CIVILIZATION_V",
  CIVILIZATION_VI = "CIVILIZATION_VI",
  OTHER = "OTHER",
}

export enum JoinFilter {
  CHIEFTAIN = "CHIEFTAIN",
  DEITY = "DEITY",
  EMPEROR = "EMPEROR",
  IMMORTAL = "IMMORTAL",
  KING = "KING",
  PRINCE = "PRINCE",
  SETTLER = "SETTLER",
  WARLORD = "WARLORD",
}

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
export interface GameInput {
  name: string
  gameType: GameType
  customGameType?: string | null
  parseCivs?: boolean | null
  description?: string | null
  hasMods?: boolean | null
  showInPublic?: boolean | null
  joinFilter?: (JoinFilter | null)[] | null
  slotLimit?: number | null
  turnTimerEnabled?: boolean | null
  turnTimerDays?: number | null
  multiSlotJoinAllowed?: boolean | null
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
