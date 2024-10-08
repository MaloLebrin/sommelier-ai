import { colorsWine } from '#wine/utils/color'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'wines'

  async up() {
    const hasTable = await this.schema.hasTable(this.tableName)
    if (!hasTable) {
      this.schema.raw('DROP TYPE IF EXISTS "wines_colors"')

      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary()
        table.timestamp('created_at')
        table.timestamp('updated_at')

        table.string('name').notNullable()
        table.string('commercial_name').nullable()
        table.integer('year').notNullable()
        table.text('description').notNullable()
        table.integer('points').notNullable()
        table.integer('price').nullable()
        table.string('variety')
        table.string('winery').nullable()
        table.string('region')
        table.string('region_2').nullable()
        table.string('country')
        table.string('province').nullable()

        table
          .enu('color', colorsWine, {
            useNative: true,
            enumName: 'wines_colors',
            existingType: false,
          })
          .notNullable()
      })
    }
  }

  async down() {
    const hasTable = await this.schema.hasTable(this.tableName)
    if (hasTable) {
      // this.schema.raw('DROP TYPE IF EXISTS "wines_colors"')
      this.schema.dropTable(this.tableName)
    }
  }
}
