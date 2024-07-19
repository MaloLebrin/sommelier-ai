import { test } from '@japa/runner'
import { extractYearFromTitle } from '#wine/utils/title'

test.group('extractYearFromTitle', () => {
  test('Detect year of production in title', ({ assert }) => {
    assert.equal(extractYearFromTitle('Wine 2019'), 2019)
    assert.equal(extractYearFromTitle('Nicosia 2013 Vulk\u00e0 Bianco  (Etna)'), 2013)
  })

  test('return current year if title is empty', ({ assert }) => {
    assert.equal(extractYearFromTitle(''), new Date().getFullYear())
  })
})
