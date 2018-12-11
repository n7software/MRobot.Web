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
    saveSettings: (_, { clientMutationId, input }, { cache }) => {
      input.__typename = "Settings"
      input.notifications!.__typename = "NotificationSettings"
      cache.writeData({
        data: { input },
      })
      return { saveSettings: { clientMutationId } }
    },
  },
}
