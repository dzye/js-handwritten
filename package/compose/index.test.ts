import { expect, test } from 'vitest'

import compose from './index'
test('compose', () => {
  function add(num1, num2) {
    return num1 + num2
  }
  function double(num) {
    return num * 2
  }
  function square(num) {
    return num ** 2
  }
  const newFn = compose(add, double, square)
  const res = newFn.call('call', 10, 20)
  expect(res).toBe(3600)
})
