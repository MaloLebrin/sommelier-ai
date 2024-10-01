import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected conversationTableName = 'conversations'
  protected messageTableName = 'messages'

  async createConversationTable() {
    const hasTable = await this.schema.hasTable(this.conversationTableName)
    if (hasTable) {
      this.schema.alterTable(this.conversationTableName, (table) => {
        table.dropColumns('created_at', 'updated_at')
        table.timestamp('created_at')
        table.timestamp('updated_at')
      })
    } else {
      this.schema.createTable(this.conversationTableName, (table) => {
        table.increments('id').primary()
        table.timestamp('created_at')
        table.timestamp('updated_at')
      })
    }
  }

  async createMessageTable() {
    const hasTable = await this.schema.hasTable(this.messageTableName)
    if (hasTable) {
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

  async up() {
    await this.createConversationTable()
    await this.createMessageTable()
  }

  async down() {
    ;[this.messageTableName, this.conversationTableName].forEach(async (element) => {
      const hasTable = await this.schema.hasTable(element)
      if (hasTable) {
        if (element === this.messageTableName) {
          this.schema.raw('DROP TYPE IF EXISTS "messages_status"')
        }
        this.schema.dropTable(element)
      }
    })
  }
}
