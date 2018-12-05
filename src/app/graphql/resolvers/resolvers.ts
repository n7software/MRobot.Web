import { ApolloCache } from "apollo-cache"

type Resolver = (
  obj?: any,
  args?: any,
  context?: {
    cache: ApolloCache<any>
    [key: string]: any,
  },
  info?: any,
) => any

interface ResolverMap {
  [fieldName: string]: Resolver | ResolverMap
}

export const resolvers: ResolverMap = {
  Mutation: {
    saveSettings: (_, { input }, { cache }) => {
      const settings = {
        ...input,
        __typename: "Settings",
      }
      cache.writeData({
        data: { settings },
      })
      return { saveSettings: settings }
    },
  },
}
