import { BaseSeeder } from '@adonisjs/lucid/seeders'
import data from '../fixtures/winemag-data-130k-v2.json'
import Wine from '#wine/models/wine'
import { extractYearFromTitle } from '#wine/utils/title'
import { detectColorFromVariety } from '#wine/utils/color'
import Taster from '#taster/models/taster'

interface DataItem {
  points: string
  title: string
  description: string
  taster_name: string
  taster_twitter_handle: string
  price: string | null
  designation: string | null
  variety: string
  region_1: string
  region_2: string | null
  province: string | null
  country: string
  winery: string
}

export default class extends BaseSeeder {
  async run() {
    if (!data || !data.length) {
      console.warn('No data found')
      return
    }

    const winesDataSet = data as DataItem[]

    await Wine.updateOrCreateMany(
      'name',
      winesDataSet.map(
        ({
          points,
          title,
          description,
          price,
          designation,
          variety,
          winery,
          region_1,
          region_2,
          country,
          province,
        }) => ({
          points: Number.parseInt(points),
          title: designation,
          commercialName: title || null,
          description,
          year: extractYearFromTitle(title),
          price: price ? Number.parseFloat(price) : null,
          variety,
          color: detectColorFromVariety(variety) || 'red',
          winery: winery || null,
          region: region_1,
          region2: region_2 || null,
          country,
          province,
        })
      )
    )

    const tastersDataSet = winesDataSet.map(({ taster_name, taster_twitter_handle }) => ({
      name: taster_name,
      twitter: taster_twitter_handle,
    }))
    await Taster.updateOrCreateMany('name', tastersDataSet)
  }
}
