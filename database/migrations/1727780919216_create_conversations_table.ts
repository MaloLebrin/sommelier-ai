import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'conversations'
  protected pivotTableName = 'conversation_user'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      // Relationships
    })

    this.schema.createTable(this.pivotTableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id')
      table.integer('conversation_id').unsigned().references('conversations.id')
      table.unique(['user_id', 'conversation_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.dropTable(this.pivotTableName)
  }
}
