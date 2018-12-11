import { Injectable } from "@angular/core"
import { Apollo } from "apollo-angular"
import gql from "graphql-tag"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { v4 } from "uuid"
import { Settings } from "../models"

const LoadSettings = gql`
  query LoadSettings {
    settings @client {
      vacationMode
      country
      availableHours
      theme
      emailAddress
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

const SaveSettings = gql`
  mutation SaveSettings($cmid: ID, $input: SettingsInput) {
    saveSettings(clientMutationId: $cmid, input: $input) @client {
      clientMutationId
    }
  }
`

@Injectable()
export class SettingsApiService {
  constructor(
    private apollo: Apollo,
  ) {}

  public load(): Observable<Settings> {
    return this.apollo
      .watchQuery<any>({
        query: LoadSettings,
        notifyOnNetworkStatusChange: true,
      })
      .valueChanges.pipe(map(({ data }) => data.settings))
  }

  public save(input: Settings): Observable<void> {
    const clientMutationId = v4()
    return this.apollo
      .mutate({
        mutation: SaveSettings,
        variables: { clientMutationId, input },
        optimisticResponse: {
          __typename: "Mutation",
          saveSettings: {
            clientMutationId,
            __typename: "Settings",
          },
        },
      })
  }
}
