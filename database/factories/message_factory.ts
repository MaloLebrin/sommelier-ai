import Message from '#message/models/message'
import factory from '@adonisjs/lucid/factories'

export const MessageFactory = factory
  .define(Message, async () => {
    return {}
  })
  .build()
