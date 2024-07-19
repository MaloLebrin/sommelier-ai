import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('name')
      table.string('twitter')
      table.string('instagram')
      table.integer('wine_id').unsigned().references('wines.id').onDelete('CASCADE') // delete tasters if wine is deleted
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
