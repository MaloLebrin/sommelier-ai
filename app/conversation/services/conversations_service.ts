import Conversation from '#conversation/models/conversation'

export default class ConversationsService {
  async getOne(conversationId: number) {
    return Conversation.findByOrFail({
      id: conversationId,
    })
  }
}
