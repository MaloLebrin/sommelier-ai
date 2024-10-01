import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // protected messageTableName = 'messages'
  // protected conversationTableName = 'conversations'
  // protected pivotConversationUser = 'conversation_user'
  // protected pivotConversaTionWine = 'conversation_wine'

  async up() {
    const hasTable = await this.schema.hasTable('disscussions')
    console.log(hasTable, '<==== hasTable')
    // const hasConversationTable = await this.schema.hasTable(this.conversationTableName)
    // console.log(hasConversationTable, '<==== hasConversationTable')
    // if (hasConversationTable) {
    //   await this.schema.dropTable(this.conversationTableName)
    // }
    // if (!hasConversationTable) {
    //   await this.schema.createTable(this.conversationTableName, (table) => {
    //     table.increments('id')
    //     table.timestamp('created_at')
    //     table.timestamp('updated_at')
    //   })
    // }
    // this.schema.raw('DROP TYPE IF EXISTS "message_status"')
    // await this.schema.createTable(this.messageTableName, (table) => {
    //   table.increments('id').primary()
    //   table.timestamp('created_at')
    //   table.timestamp('updated_at')
    //   table.timestamp('read_at').nullable()
    //   table.text('content', 'longtext').notNullable()
    //   table.string('status').defaultTo('draft').notNullable()
    //   // Relationships
    //   table.integer('author_id').unsigned().references('users.id')
    //   table.integer('conversation_id').unsigned().references('conversations.id').onDelete('CASCADE') // delete all messages when conversation is deleted
    // })
    // await this.schema.createTable(this.pivotConversationUser, (table) => {
    //   table.increments('id').primary()
    //   table.integer('user_id').unsigned().references('users.id')
    //   table.integer('conversation_id').unsigned().references('conversations.id')
    //   table.unique(['user_id', 'conversation_id'])
    //   table.timestamp('created_at', { useTz: true })
    //   table.timestamp('updated_at', { useTz: true })
    // })
    // await this.schema.createTable(this.pivotConversaTionWine, (table) => {
    //   table.increments('id').primary()
    //   table.integer('wine_id').unsigned().references('wines.id')
    //   table.integer('conversation_id').unsigned().references('conversations.id')
    //   table.unique(['wine_id', 'conversation_id'])
    //   table.timestamp('created_at', { useTz: true })
    //   table.timestamp('updated_at', { useTz: true })
    // })
  }

  async down() {
    //   ;[
    //     this.pivotConversaTionWine,
    //     this.pivotConversationUser,
    //     this.messageTableName,
    //     this.conversationTableName,
    //   ].forEach(async (element) => {
    //     const hasTable = await this.schema.hasTable(element)
    //     if (hasTable) {
    //       if (element === this.messageTableName) {
    //         this.schema.raw('DROP TYPE IF EXISTS "messages_status"')
    //       }
    //       await this.schema.dropTable(element)
    //     }
    //   })
  }
}
