import Wine from '#wine/models/wine'
import factory from '@adonisjs/lucid/factories'

export const WineFactory = factory
  .define(Wine, async () => {
    return {}
  })
  .build()
