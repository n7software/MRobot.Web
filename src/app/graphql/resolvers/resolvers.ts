import { ApolloCache } from "apollo-cache"
import { LoadSettings_settings, Notifier } from "src/app/models"
import { v4 } from "uuid"
import { LoadSettingsQuery } from "../settings-api.service"

type Resolver = (
  obj?: any,
  args?: any,
  context?: {
    cache: ApolloCache<any>
    [key: string]: any
  },
  info?: any,
) => any

interface ResolverMap {
  [fieldName: string]: Resolver | ResolverMap
}

export const clientResolvers: ResolverMap = {}

export const serverMockResolvers: ResolverMap = {
  Mutation: {
    createGame: (_, { clientMutationId }) => {
      return {
        __typename: "GameMutationResponse",
        clientMutationId,
        game: {
          __typename: "Game",
          id: v4(),
          createdAt: new Date().toISOString(),
        },
      }
    },
    saveSettings: (_, { clientMutationId }) => {
      return {
        __typename: "SettingsMutationResponse",
        clientMutationId,
      }
    },
    completeDiscordConnection: (_, { clientMutationId }, { cache }) => {
      const settings = cache.readQuery<any>({ query: LoadSettingsQuery })
        .settings as LoadSettings_settings
      settings.discordConnected = true

      const typename = (settings.notifications as any).__typename
      delete (settings.notifications as any).__typename
      Object.keys(settings.notifications).forEach(
        key =>
          (settings.notifications[key] = settings.notifications[key].concat(
            Notifier.DISCORD,
          )),
      )
      ;(settings.notifications as any).__typename = typename

      cache.writeData({ data: { settings } })
      return {
        __typename: "DiscordConnectionResponse",
        clientMutationId,
      }
    },
    disconnectDiscord: (_, { clientMutationId }, { cache }) => {
      return {
        __typename: "DiscordConnectionResponse",
        clientMutationId,
      }
    },
  },
}
