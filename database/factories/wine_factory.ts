import Wine from '#wine/models/wine'
import { ColorsWineMap } from '#wine/utils/color'
import factory from '@adonisjs/lucid/factories'

export const WineFactory = factory
  .define(Wine, ({ faker }) => {
    return {
      name: faker.lorem.words(2),
      commercialName: faker.lorem.words(3),
      year: faker.datatype.number({ min: 1990, max: 2020 }),
      color: ColorsWineMap.get('red'),
      winery: faker.lorem.words(10),
      province: faker.location.state(),
      region: faker.location.state(),
      country: faker.location.country(),
    }
  })
  .build()
