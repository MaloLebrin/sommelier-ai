import factory from '@adonisjs/lucid/factories'
import Taster from '#taster/models/taster'

export const TasterFactory = factory
  .define(Taster, async () => {
    return {}
  })
  .build()
