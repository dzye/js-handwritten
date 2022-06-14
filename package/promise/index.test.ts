import { expect, test, vi } from 'vitest'
import myPromise from './index'
function testPromise(): any {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 3000)
  })
}
test('promise', async () => {
  expect(await testPromise()).toEqual({ success: true })
})
