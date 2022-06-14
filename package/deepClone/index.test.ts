import { expect, test } from 'vitest'
import deepClone from './index'
test('deepClone', () => {
  const obj = { userInfo: { name: 'xxx', age: 15 }, fn: () => 2 }
  const cloneObj = deepClone(obj)
  expect(cloneObj).toEqual(obj)
})
