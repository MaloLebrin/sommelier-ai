import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import User from '#auth/models/user'
import type { HasOne } from '@adonisjs/lucid/types/relations'

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

  // static async markAsRead(id: number) {
  //   const message = await this.findOrFail(id)
  //   message.readAt = DateTime.local()
  //   await message.save()
  // }

  // Réactions, images, conversation
}
