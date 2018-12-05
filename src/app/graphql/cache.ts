import { ApolloCache } from "apollo-cache"
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory"
import { persistCache } from "apollo-cache-persist"
import { ApolloLink } from "apollo-link"
import { withClientState } from "apollo-link-state"
import * as localForage from "localforage"
import { defaults, resolvers } from "./resolvers"

export let stateLink: ApolloLink
export let cache: ApolloCache<NormalizedCacheObject>

export async function initCache(): Promise<void> {
  cache = new InMemoryCache()

  stateLink = withClientState({
    cache,
    defaults,
    resolvers,
  })

  await persistCache({
    cache,
    storage: localForage as any,
  })
}
