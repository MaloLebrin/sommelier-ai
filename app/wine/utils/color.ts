import type { ColorsWineEnum } from '../types/color'

export const ColorsWineMap = new Map<ColorsWineEnum, ColorsWineEnum>([
  ['red', 'red'],
  ['white', 'white'],
  ['rose', 'rose'],
])

export const colorsWine = [...ColorsWineMap.keys()]

export function detectColorFromVariety(variety: string): ColorsWineEnum | undefined {
  if (!variety) {
    return ColorsWineMap.get('red')
  }
  const varietyLower = variety.toLowerCase().trim()
  switch (true) {
    case varietyLower.includes('red'):
      return ColorsWineMap.get('red')
    case varietyLower.includes('white'):
      return ColorsWineMap.get('white')
    case varietyLower.includes('rose'):
      return ColorsWineMap.get('rose')

    default:
      return ColorsWineMap.get('red')
  }
}
