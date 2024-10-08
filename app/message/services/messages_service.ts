import Message from '#message/models/message'
import { DateTime } from 'luxon'

export default class MessagesService {
  async readMessage(messageId: number) {
    const message = await Message.findOrFail(messageId)
    message.readAt = DateTime.local()
    return message.save()
  }

  async createMessage({
    content,
    conversationId,
    authorId,
  }: {
    content: string
    conversationId: number
    authorId: number
  }) {
    return Message.create({
      content,
      conversationId,
      authorId,
    })
  }

  async listByConversation(conversationId: number) {
    return Message.findManyBy({
      conversationId,
    })
  }
}
