import Message from '#message/models/message'
import { MessageStatusMap } from '#message/utils/status'
import factory from '@adonisjs/lucid/factories'

export const MessageFactory = factory
  .define(Message, ({ faker }) => {
    return {
      content: faker.lorem.words(44),
      readAt: null,
      status: MessageStatusMap.get('sent')?.key,
    }
  })
  .build()
