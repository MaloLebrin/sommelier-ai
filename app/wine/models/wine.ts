import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Taster from '#taster/models/taster'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Wine extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare commercialName: string | null

  @column()
  declare year: number

  @column()
  declare description: string

  @column()
  declare points: number

  @column()
  declare price: number | null

  @column()
  declare variety: string

  @column()
  declare winery: string | null

  @column()
  declare region: string

  @column()
  declare region2: string | null

  @column()
  declare country: string

  @column()
  declare province: string | null

  @column()
  declare color: 'red' | 'white' | 'rose'

  @hasMany(() => Taster)
  declare tasters: HasMany<typeof Taster>
}
