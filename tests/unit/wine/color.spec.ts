import { test } from '@japa/runner'
import { detectColorFromVariety } from '#wine/utils/color'

test.group('detectColorFromVariety', () => {
  test('Detec color white in variety', ({ assert }) => {
    assert.strictEqual(detectColorFromVariety('White Blend'), 'white')
  })

  test('Detec color red in variety', ({ assert }) => {
    assert.strictEqual(detectColorFromVariety('Red Blend'), 'red')
  })

  test('Detec color rose in variety', ({ assert }) => {
    assert.strictEqual(detectColorFromVariety('Rose Blend'), 'rose')
  })

  test('return undefined if variety is empty', ({ assert }) => {
    assert.isUndefined(detectColorFromVariety(''))
  })
})
