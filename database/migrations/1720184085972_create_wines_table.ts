import { colorsWine } from '#wine/types/color'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'wines'

  async up() {
    const hasTable = await this.schema.hasTable(this.tableName)
    if (!hasTable) {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id')
        table.timestamp('created_at')
        table.timestamp('updated_at')

        table.string('name').notNullable()
        table.text('description').notNullable()
        table.integer('points').notNullable()
        table.integer('price')
        table.string('variety')
        table.string('winery')
        table.string('region')
        table.string('region2')
        table.string('country')
        table.string('province')

        table
          .enu('color', colorsWine, {
            useNative: true,
            enumName: 'wine_color_enum',
            existingType: false,
          })
          .notNullable()
      })
    }
  }

  async down() {
    const hasTable = await this.schema.hasTable(this.tableName)
    if (hasTable) {
      this.schema.dropTable(this.tableName)
    }
  }
}
