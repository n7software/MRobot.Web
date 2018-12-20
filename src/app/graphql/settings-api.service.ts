import { Injectable } from "@angular/core"
import { Apollo } from "apollo-angular"
import gql from "graphql-tag"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { v4 } from "uuid"
import { Settings, SettingsInput } from "../models"
import { clientIfMocked, fnIfLive } from "./mock-utils"

export const LoadSettingsQuery = gql`
  query LoadSettings {
    settings ${clientIfMocked} {
      vacationMode
      country
      availableHours
      theme
      emailAddress
      discordConnected
      discord {
        showOnProfile
        joinGDM
      }
      notifications {
        gameInvitations
        playerJoinedGame
        turn
        gameEnded
        turnTimerModified
        skipped
        comment
        privateMessage
      }
    }
  }
`

export const SaveSettingsQuery = gql`
  mutation SaveSettings($clientMutationId: ID, $input: SettingsInput) {
    saveSettings(clientMutationId: $clientMutationId, input: $input) ${clientIfMocked} {
      clientMutationId
    }
  }
`

export const CompleteDiscordConnectionQuery = gql`
  mutation CompleteDiscordConnection($clientMutationId: ID, $code: ID!) {
    completeDiscordConnection(clientMutationId: $clientMutationId, code: $code) ${clientIfMocked} {
      clientMutationId
    }
  }
`

export const DisconnectDiscordQuery = gql`
  mutation DisconnectDiscord($clientMutationId: ID, $code: ID!) {
    disconnectDiscord(clientMutationId: $clientMutationId) ${clientIfMocked} {
      clientMutationId
    }
  }
`

@Injectable()
export class SettingsApiService {
  constructor(private apollo: Apollo) {}

  public load(): Observable<Settings> {
    return this.apollo
      .watchQuery<any>({
        query: LoadSettingsQuery,
        notifyOnNetworkStatusChange: true,
      })
      .valueChanges.pipe(map(({ data }) => data.settings))
  }

  public save(input: SettingsInput): Observable<void> {
    const clientMutationId = v4()
    return this.apollo.mutate({
      mutation: SaveSettingsQuery,
      variables: { clientMutationId, input },
      update: store => {
        store.writeData({ data: { settings: input } })
      },
    })
  }

  public completeDiscordConnection(code: string): Observable<void> {
    const clientMutationId = v4()
    return this.apollo.mutate({
      mutation: CompleteDiscordConnectionQuery,
      variables: { clientMutationId, code },
    })
  }

  public disconnectDiscord(): Observable<void> {
    const clientMutationId = v4()
    return this.apollo.mutate({
      mutation: CompleteDiscordConnectionQuery,
      variables: { clientMutationId },
      update: store => {
        const settings = store.readQuery<any>({ query: LoadSettingsQuery })
          .settings as Settings
        settings.discordConnected = false

        const typename = (settings.notifications as any).__typename
        delete (settings.notifications as any).__typename
        Object.keys(settings.notifications).forEach(
          key =>
            (settings.notifications[key] = settings.notifications[key].filter(
              n => n !== "discord",
            )),
        )
        ;(settings.notifications as any).__typename = typename

        store.writeQuery({ query: LoadSettingsQuery, data: { settings } })
      },
    })
  }
}
