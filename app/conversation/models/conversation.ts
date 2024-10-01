import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import type { HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Wine from '#wine/models/wine'

export default class Conversation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relationships
  @manyToMany(() => Wine)
  declare wines: ManyToMany<typeof Wine>

  @hasOne(() => Wine)
  declare selectedWineId: HasOne<typeof Wine>
}
