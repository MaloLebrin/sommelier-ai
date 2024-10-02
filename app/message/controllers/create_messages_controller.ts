import type { HttpContext } from '@adonisjs/core/http'
import MessagesService from '#message/services/messages_service'
import { inject } from '@adonisjs/core'
import vine from '@vinejs/vine'
import ConversationsService from '#conversation/services/conversations_service'

@inject()
export default class CreateMessagesController {
  static validator = vine.compile(
    vine.object({
      content: vine.string().minLength(3).trim(),
      conversationId: vine.number().positive(),
      authorId: vine.number().positive(),
    })
  )

  constructor(
    private messagesService: MessagesService,
    private conversationService: ConversationsService
  ) {}

  async execute({ request, view }: HttpContext) {
    const { content, conversationId, authorId } = await request.validateUsing(
      CreateMessagesController.validator
    )

    await this.messagesService.createMessage({
      content,
      conversationId,
      authorId,
    })

    const [conversation, messages] = await Promise.all([
      this.conversationService.getOne(conversationId),
      this.messagesService.listByConversation(conversationId),
    ])

    return view.render('pages/Home', { conversation, messages })
  }
}
