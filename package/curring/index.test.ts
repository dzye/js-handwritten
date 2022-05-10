import { expect, test } from 'vitest'
import curring from './index'
test('curring', () => {
  const add = function (num1, num2, num3) {
    return num1 + num2 + num3;
  }
  const newFn = curring(add);
  expect(newFn(10, 20)(30)).toBe(60)
  expect(newFn(10)(20)(30)).toBe(60)
})
