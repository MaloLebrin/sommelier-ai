import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#auth/models/user'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
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
  declare authorId: HasOne<typeof User>

  @belongsTo(() => Conversation)
  declare conversation: BelongsTo<typeof Conversation>

  // Réactions, images
}
