import factory from '@adonisjs/lucid/factories'
import Taster from '#taster/models/taster'

export const TasterFactory = factory
  .define(Taster, ({ faker }) => {
    return {
      name: faker.person.fullName(),
      instagram: faker.internet.url(),
      email: faker.internet.email(),
      twitter: faker.internet.url(),
    }
  })
  .build()
