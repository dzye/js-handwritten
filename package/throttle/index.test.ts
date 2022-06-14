import { expect, test, vi } from 'vitest'
import throttle from './index'
vi.useFakeTimers()
test('throttle', () => {
  const fn = vi.fn(() => 1)
  const throttled = throttle(fn, 1000)
  throttled()
  throttled()
  setTimeout(() => {
    throttled()
  }, 1500)
  vi.runAllTimers()
  expect(fn).toHaveReturnedTimes(2)
})
