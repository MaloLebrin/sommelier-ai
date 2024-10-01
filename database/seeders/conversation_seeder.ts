import User from '#auth/models/user'
import Conversation from '#conversation/models/conversation'
import Message from '#message/models/message'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const users = await User.createMany([
      {
        email: 'harrypotter@poudlard.com',
        password: 'password',
        firstName: 'Harry',
        lastName: 'Potter',
      },
      {
        email: 'albusdumbledore@poudlard.com',
        password: 'password',
        firstName: 'Albus',
        lastName: 'Dumbledore',
      },
    ])

    const conversation = await Conversation.create({})
    await Promise.all(users.map((user) => user.related('conversations').attach([conversation.id])))

    const [harryPotter, albusDumbledore] = users

    const [message1, message2] = await Message.createMany([
      {
        content: 'Hello Harry',
        status: 'sent',
      },
      {
        content: 'Hello PHD Dumbledore',
        status: 'sent',
      },
    ])

    await message1.related('conversation').associate(conversation)
    await message2.related('conversation').associate(conversation)
    await harryPotter.related('messages').save(message1)
    await albusDumbledore.related('messages').save(message2)
  }
}
