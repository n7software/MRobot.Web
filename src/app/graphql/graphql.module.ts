import { NgModule } from "@angular/core"
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular"
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { persistCache } from "apollo-cache-persist"
import { ApolloClientOptions } from "apollo-client"

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.localStorage,
})

@NgModule({
  declarations: [],
  imports: [
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
      return {
        cache,
        link: httpLink.create({
          uri: "http://graph.multiplayerrobot.com",
        }),
      }
    },
    deps: [HttpLink],
  }],
})
export class GraphqlModule { }
