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

  async up() {
    await this.createConversationTable()
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
