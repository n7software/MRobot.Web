import { Injectable } from "@angular/core"
import { Apollo } from "apollo-angular"
import { DataProxy } from "apollo-cache"
import gql from "graphql-tag"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { v4 } from "uuid"
import {
  CreateGame,
  CreateGame_createGame_game,
  GameInput,
  GetGame,
  GetGame_game,
  ListGames,
  ListGames_games,
} from "../models"
import { clientIfMocked } from "./mock-utils"

@Injectable()
export class GamesApiService {
  constructor(private apollo: Apollo) {}

  public list(): Observable<ListGames_games[]> {
    return this.apollo
      .watchQuery<ListGames>({
        query: ListGamesQuery,
      })
      .valueChanges.pipe(map(({ data }) => data.games))
  }

  public listCached(): Observable<ListGames_games[]> {
    return this.apollo
      .watchQuery<ListGames>({
        query: ListGamesQuery,
        fetchPolicy: "cache-only",
      })
      .valueChanges.pipe(
        map(({ data }) => data.games),
        map(games => games.map(game => this.parseDates(game as GetGame_game))),
      )
  }

  public get(id: string): Observable<GetGame_game> {
    return this.apollo
      .watchQuery<GetGame>({
        query: GetGameQuery,
        fetchPolicy: "cache-and-network",
        variables: { id },
      })
      .valueChanges.pipe(
        map(({ data }) => data.game),
        map(game => this.parseDates(game)),
      )
  }

  public create(input: GameInput): Observable<void> {
    const clientMutationId = v4()
    return this.apollo.mutate({
      mutation: CreateGameMutation,
      variables: { clientMutationId, input },
      update: (store, result) => this.onGameCreated(store, result.data, input),
    })
  }

  private onGameCreated(
    store: DataProxy,
    data: CreateGame,
    input: GameInput,
  ): void {
    const game = this.setGameDefaults({
      ...input,
      ...data.createGame.game,
    } as GetGame_game)

    store.writeQuery<GetGame>({
      query: GetGameQuery,
      variables: { id: game.id },
      data: { game },
    })

    const gamesList = store.readQuery<ListGames>({ query: ListGamesQuery })
    store.writeQuery<ListGames>({
      query: ListGamesQuery,
      data: {
        games: [game, ...gamesList.games],
      },
    })
  }

  private setGameDefaults(game: GetGame_game): GetGame_game {
    return {
      ...game,
      customGameType: game.customGameType || null,
      parseCivs: game.parseCivs || true,
      description: game.description || null,
      startedAt: game.startedAt || null,
      finishedAt: game.finishedAt || null,
      hasMods: game.hasMods || false,
      showInPublic: game.showInPublic || false,
      joinFilter: game.joinFilter || [],
      slotLimit: game.slotLimit || null,
      turnTimerEnabled: game.turnTimerEnabled || false,
      turnTimerDays: game.turnTimerDays || null,
      createdFromSave: game.createdFromSave || false,
      multiSlotJoinAllowed: game.multiSlotJoinAllowed || false,
      players: game.players || [],
      turns: game.turns || [],
    }
  }

  private parseDates(game: GetGame_game): GetGame_game {
    return {
      ...game,
      createdAt: new Date(game.createdAt),
      startedAt: game.startedAt ? new Date(game.startedAt) : null,
      finishedAt: game.finishedAt ? new Date(game.finishedAt) : null,
      turns: game.turns
        ? game.turns.map(turn => ({
            ...turn,
            startedAt: new Date(turn.startedAt),
            finishedAt: turn.finishedAt ? new Date(turn.finishedAt) : null,
            expiresAt: turn.expiresAt ? new Date(turn.expiresAt) : null,
          }))
        : null,
    }
  }
}

const ListGamesQuery = gql`
  query ListGames {
    games ${clientIfMocked} {
      id
      name
      gameType
      customGameType
      description
      turns(take: 1) {
        player {
          user {
            id
          }
        }
      }
    }
  }
`

const GetGameQuery = gql`
  query GetGame($id: ID!) {
    game(id: $id) ${clientIfMocked} {
      id
      name
      gameType
      customGameType
      parseCivs
      description
      createdAt
      startedAt
      finishedAt
      hasMods
      showInPublic
      joinFilter
      slotLimit
      turnTimerEnabled
      turnTimerDays
      createdFromSave
      multiSlotJoinAllowed
      host {
        id
      }
      players {
        user {
          id
        }
      }
      turns(take: 10) {
        player {
          user {
            id
          }
        }
        startedAt
        finishedAt
        expiresAt
      }
    }
  }
`

const CreateGameMutation = gql`
  mutation CreateGame($clientMutationId: ID, $input: GameInput!) {
    createGame(clientMutationId: $clientMutationId, input: $input) ${clientIfMocked} {
      clientMutationId
      game {
        id
        createdAt
      }
    }
  }
`
