export type ColorsWineEnum = 'red' | 'white' | 'rose'

export const ColorsWineMap = new Map<ColorsWineEnum, string>([
  ['red', 'Red'],
  ['white', 'White'],
  ['rose', 'Rose'],
])

export const colorsWine = [...ColorsWineMap.keys()]
