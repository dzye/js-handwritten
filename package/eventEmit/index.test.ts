import { expect, test ,vi} from 'vitest'
import EventEmitter from './index'

vi.useFakeTimers()
test('EventEmitter', () => {
  const eventBus = new EventEmitter()
  const task1 = vi.fn(() => { console.log('task1'); })
  const task2 = vi.fn(() => { console.log('task2'); })
  eventBus.on('task', task1)
  eventBus.on('task', task2)
  eventBus.off('task', task1)
  setTimeout(() => {
    eventBus.emit('task')
  }, 1000)
  vi.runAllTimers()
  expect(task1).toHaveReturnedTimes(0)
  expect(task2).toHaveReturnedTimes(1)
})
