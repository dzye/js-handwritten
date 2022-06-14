const deepClone = function (obj: any, cache = new WeakMap()): any {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  if (cache.has(obj)) return cache.get(obj)
  const cloneObj = new obj.constructor()
  cache.set(obj, cloneObj)

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key], cache)
    }
  }
  return cloneObj
}
export default deepClone
