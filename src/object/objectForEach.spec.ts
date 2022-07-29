import { noop } from '../function'
import { objectForEach } from './objectForEach'

describe('objectForEach', () => {
  it('should return undefined', () => {
    const obj = { value: 1 }
    const result = objectForEach(obj, noop)
    expect(result).toBeUndefined()
  })

  it('should call callbackFn with { key, value } pairs', () => {
    const obj = { a: 1, b: 2 }
    const mockCallback = jest.fn(noop)
    objectForEach(obj, mockCallback)
    expect(mockCallback).toHaveBeenNthCalledWith(1, { key: 'a', value: 1 })
    expect(mockCallback).toHaveBeenNthCalledWith(2, { key: 'b', value: 2 })
  })
})
