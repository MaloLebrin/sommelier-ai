import { BaseSeeder } from '@adonisjs/lucid/seeders'
import * as JSON from '../fixtures/winemag-data-130k-v2.json' assert { type: 'json' }
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
    const data = JSON as DataItem[][]
    const dataToUse = Object.values(data)[0].slice(60000, 90000)
    if (!dataToUse || !dataToUse.length) {
      console.warn('No data found')
      return
    }

    const winesDataSet = dataToUse as DataItem[]

    const cleanData = winesDataSet.filter(
      ({ title, designation }) =>
        title !== null && designation !== null && title !== undefined && designation !== undefined
    )

    function formatString(str: string) {
      if (!str) {
        return
      }
      return str.trim().toLowerCase()
    }

    const dataToSet = cleanData
      .map(
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
          name: formatString(designation || title),
          commercialName: formatString(title) || undefined,
          description,
          year: extractYearFromTitle(title),
          price: price ? Number.parseFloat(price) : undefined,
          variety: formatString(variety) || undefined,
          color: detectColorFromVariety(variety) || 'red',
          winery: formatString(winery) || undefined,
          region: formatString(region_1),
          region2: region_2 ? formatString(region_2) : undefined,
          country: formatString(country),
          province: province ? formatString(province) : undefined,
        })
      )
      .filter((item) => item.name && item.points && item.year && item.description && item.variety)
    await Wine.updateOrCreateMany('name', dataToSet)
    const tastersDataSet: any[] = []

    winesDataSet
      .filter(({ taster_name, taster_twitter_handle }) => taster_name && taster_twitter_handle)
      .forEach(({ taster_name, taster_twitter_handle }) => {
        if (!tastersDataSet.find((taster) => taster.name === taster_name)) {
          tastersDataSet.push({
            name: taster_name,
            twitter: taster_twitter_handle,
          })
        }
      })

    await Taster.updateOrCreateMany('name', tastersDataSet)
  }
}
