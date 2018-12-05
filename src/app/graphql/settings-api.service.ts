import { Injectable } from "@angular/core"
import { Apollo } from "apollo-angular"
import gql from "graphql-tag"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { Settings } from "../models"

const LoadSettings = gql`
  query LoadSettings {
    settings {
      theme
    }
  }
`

const SaveSettings = gql`
  mutation SaveSettings($input: SettingsInput) {
    saveSettings(input: $input) @client {
      theme
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

  public save(input: Settings): void {
    this.apollo
      .mutate({
        mutation: SaveSettings,
        variables: { input },
        update: (store, { data: { saveSettings } }) => {
          store.writeQuery({ query: LoadSettings, data: saveSettings })
        },
        optimisticResponse: {
          __typename: "Mutation",
          saveSettings: {
            ...input,
            __typename: "Settings",
          },
        },
      }).subscribe()
  }
}
