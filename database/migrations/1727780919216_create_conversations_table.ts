import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'conversations'
  protected pivotConversationUser = 'conversation_user'
  protected pivotConversaTionWine = 'conversation_wine'

  async up() {
    await this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      // Relationships
      table.integer('selected_wine_id').unsigned().references('wines.id').nullable()
    })

    await this.schema.createTable(this.pivotConversationUser, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id')
      table.integer('conversation_id').unsigned().references('conversations.id')
      table.unique(['user_id', 'conversation_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    await this.schema.createTable(this.pivotConversaTionWine, (table) => {
      table.increments('id').primary()
      table.integer('wine_id').unsigned().references('wines.id')
      table.integer('conversation_id').unsigned().references('conversations.id')
      table.unique(['wine_id', 'conversation_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    await this.schema.dropTable(this.pivotConversationUser)
    await this.schema.dropTable(this.pivotConversaTionWine)
    await this.schema.dropTable(this.tableName)
  }
}
