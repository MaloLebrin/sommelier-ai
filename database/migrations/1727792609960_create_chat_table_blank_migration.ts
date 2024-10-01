import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected messageTableName = 'messages'

  async up() {
    const hasTable = await this.schema.hasTable(this.messageTableName)
    if (!hasTable) {
      this.schema.createTable(this.messageTableName, (table) => {
        table.increments('id').primary()
        table.timestamp('created_at')
        table.timestamp('updated_at')
        table.timestamp('read_at').nullable()
        table.text('content', 'longtext').notNullable()
        table.enum('status', ['draft', 'sent', 'read']).defaultTo('draft').notNullable()
        table.integer('author_id').unsigned().references('users.id')
        table.integer('conversation_id').unsigned().references('conversations.id').nullable()
      })
    }
  }

  async down() {
    const hasTable = await this.schema.hasTable(this.messageTableName)
    if (hasTable) {
      this.schema.raw('DROP TYPE IF EXISTS "messages_status"')
      this.schema.dropTable(this.messageTableName)
    }
  }
}
