import Conversation from '#conversation/models/conversation'
import factory from '@adonisjs/lucid/factories'

export const ConversationFactory = factory
  .define(Conversation, async () => {
    return {}
  })
  .build()
