import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'conversation_wine'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('wine_id').unsigned().references('wines.id')
      table.integer('conversation_id').unsigned().references('conversations.id')
      table.unique(['wine_id', 'conversation_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    const hasTable = await this.schema.hasTable(this.tableName)
    if (hasTable) {
      this.schema.dropTable(this.tableName)
    }
  }
}
