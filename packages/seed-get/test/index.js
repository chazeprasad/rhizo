import { seedGet } from '../src'

const seed = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

test('seedGet returns values from the seed', () => {
  const a = seedGet('colors.blue')({ seed })
  expect(a).toBe('#07c')
})

test('seedGet does not throw when value doesnt exist', () => {
  const a = seedGet('colors.blue.5')({ seed })
  expect(a).toBe(null)
})

test('seedGet accepts a fallback', () => {
  const a = seedGet('colors.lightblue', '#0cf')({ seed })
  expect(a).toBe('#0cf')
})
