const curring = function (fn) {
  const curried = function (...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.call(this, ...args, ...args2)
      }
    }
  }
  return curried
}
export default curring
