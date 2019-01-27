import { ApolloCache } from "apollo-cache"
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory"
import { persistCache } from "apollo-cache-persist"
import { ApolloLink } from "apollo-link"
import { withClientState } from "apollo-link-state"
import { environment } from "src/environments/environment"
import { clientResolvers, defaults, serverMockResolvers } from "./resolvers"

export let stateLink: ApolloLink
export let cache: ApolloCache<NormalizedCacheObject>

export async function initCache(): Promise<void> {
  cache = new InMemoryCache({
    cacheRedirects: {
      Query: {
        game: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: "Game", id: args.id }),
      },
    },
  })

  stateLink = withClientState({
    cache,
    defaults,
    resolvers: {
      ...clientResolvers,
      ...(environment.api ? {} : serverMockResolvers),
    },
  })

  await persistCache({
    cache,
    storage: window.localStorage,
  })
}
