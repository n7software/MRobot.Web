import { NgModule } from "@angular/core"
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular"
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http"
import { ApolloClientOptions } from "apollo-client"
import { ApolloLink } from "apollo-link"
import { cache, stateLink } from "./cache"
import { SettingsApiService } from "./settings-api.service"

export function apolloFactory(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({
    uri: "http://graph.multiplayerrobot.com",
  })

  return {
    cache,
    link: ApolloLink.from([stateLink, http]),
  }
}

@NgModule({
  declarations: [],
  imports: [
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [
    SettingsApiService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloFactory,
      deps: [HttpLink],
    },
  ],
})
export class GraphqlModule { }
