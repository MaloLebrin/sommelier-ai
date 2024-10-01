import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Conversation from '#conversation/models/conversation'

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare readAt: DateTime | null

  @column()
  declare content: string

  @column()
  declare status: 'draft' | 'sent' | 'received' | 'read'

  // Relationships
  @column()
  declare conversationId: number
  @column()
  declare authorId: number

  @belongsTo(() => Conversation)
  declare conversation: BelongsTo<typeof Conversation>
  // Réactions, images
}
