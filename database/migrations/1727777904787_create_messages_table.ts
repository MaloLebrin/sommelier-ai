import { messageStatus } from '#message/utils/status'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.timestamp('read_at').nullable()
      table.text('content', 'longtext').notNullable()
      table
        .enu('status', messageStatus, {
          useNative: true,
          enumName: 'message_status',
          existingType: false,
        })
        .defaultTo('draft')
        .notNullable()

      // Relationships
      table.integer('author_id').unsigned().references('users.id')

      table.integer('conversation_id').unsigned().references('conversations.id').onDelete('CASCADE') // delete all messages when conversation is deleted
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
