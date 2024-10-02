import User from '#auth/models/user'
import Conversation from '#conversation/models/conversation'
import Message from '#message/models/message'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const users = await User.createMany([
      {
        email: 'sommelier@sommelier.ai',
        password: 'password',
        firstName: 'Sommelier',
        lastName: 'AI',
      },
      {
        email: 'harrypotter@poudlard.com',
        password: 'password',
        firstName: 'Harry',
        lastName: 'Potter',
      },
    ])

    const conversation = await Conversation.create({})
    await Promise.all(users.map((user) => user.related('conversations').attach([conversation.id])))

    const [sommerlierAi, harryPotter] = users

    const [message1, message2] = await Message.createMany([
      {
        content: 'Hello Harry, how can i help you?',
        status: 'read',
      },
      {
        content: 'Hello Sommelier AI, I need help with a potion',
        status: 'sent',
      },
    ])

    await message1.related('conversation').associate(conversation)
    await message2.related('conversation').associate(conversation)
    await harryPotter.related('messages').save(message2)
    await sommerlierAi.related('messages').save(message1)
  }
}
