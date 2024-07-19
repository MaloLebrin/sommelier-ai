import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Taster from '#taster/models/taster'
import { HasMany } from '@adonisjs/lucid/types/relations'
import { ColorsWineEnum } from '#wine/types/color'

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
  declare description: string

  @column()
  declare points: number

  @column()
  declare price: number

  @column()
  declare variety: string

  @column()
  declare winery: string

  @column()
  declare region: string

  @column()
  declare region2: string

  @column()
  declare country: string

  @column()
  declare province: string

  @column()
  declare color: ColorsWineEnum

  @hasMany(() => Taster)
  declare posts: HasMany<typeof Taster>
}
