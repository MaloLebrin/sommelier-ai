import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected pivotConversationUser = 'conversation_user'

  async up() {
    this.schema.createTable(this.pivotConversationUser, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id')
      table.integer('conversation_id').unsigned().references('conversations.id')
      table.unique(['user_id', 'conversation_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    const hasTable = await this.schema.hasTable(this.pivotConversationUser)
    if (hasTable) {
      await this.schema.dropTable(this.pivotConversationUser)
    }
  }
}
