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
        fullName: 'Harry Potter',
      },
      {
        email: 'albusdumbledore@poudlard.com',
        password: 'password',
        fullName: 'Albus Dumbledore',
      },
    ])

    const conversation = await Conversation.create({})
    const messages = await Message.createMany([
      {
        content: 'Hello Harry',
        status: 'sent',
      },
      {
        content: 'Hello PHD Dumbledore',
        status: 'sent',
      },
    ])

    await Promise.all(
      messages.map((message) => message.related('conversation').associate(conversation))
    )

    await Promise.all(users.map((user) => user.related('conversations').attach([conversation.id])))
  }
}
