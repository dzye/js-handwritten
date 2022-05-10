import { expect, test } from 'vitest'

import compose from './index'
test('curring', () => {
  function add(num1, num2) {
    console.log(this);
    return num1 + num2;
  }
  function double(num) {
    console.log(this);
    return num * 2;
  }
  function square(num) {
    console.log(this);
    return num ** 2;
  }
  const newFn = compose(add, double, square);
  const res = newFn.call('call', 10, 20);
  expect(res).toBe(3600)
})
