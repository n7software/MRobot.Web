import { NgModule } from "@angular/core"
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular"
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http"
import { ApolloClientOptions } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { environment } from "src/environments/environment"
import { cache, stateLink } from "./cache"
import { GamesApiService } from "./games-api.service"
import { SettingsApiService } from "./settings-api.service"

export function apolloFactory(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    cache,
    link: environment.api
      ? ApolloLink.from([
          stateLink,
          httpLink.create({
            uri: environment.api,
          }),
        ])
      : stateLink,
  }
}

@NgModule({
  declarations: [],
  imports: [ApolloModule, HttpLinkModule],
  providers: [
    SettingsApiService,
    GamesApiService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloFactory,
      deps: [HttpLink],
    },
  ],
})
export class GraphqlModule {}
