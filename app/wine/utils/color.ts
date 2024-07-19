export const ColorsWineMap = new Map<ColorsWineEnum, string>([
  ['red', 'red'],
  ['white', 'white'],
  ['rose', 'rose'],
])

export const colorsWine = [...ColorsWineMap.keys()]

export function detectColorFromVariety(variety: string): ColorsWineEnum {
  if (!variety) {
    return
  }
  const varietyLower = variety.toLowerCase().trim()
  switch (true) {
    case varietyLower.includes('red'):
      return ColorsWineMap.get('red')
    case varietyLower.includes('white'):
      return ColorsWineMap.get('white')
    case varietyLower.includes('rose'):
      return ColorsWineMap.get('rose')
  }
}
