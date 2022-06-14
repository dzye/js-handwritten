import { expect, test, vi } from 'vitest'
import debounce from './index'
vi.useFakeTimers()
test('debounce', () => {
  const fn = vi.fn(() => 1)
  const debounced = debounce(fn, 1000)
  debounced()
  debounced()
  setTimeout(() => {
    debounced()
  }, 1500)
  vi.runAllTimers()
  expect(fn).toHaveReturnedTimes(2)
})
