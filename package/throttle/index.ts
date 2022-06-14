const throttle = function (fn, delay): any {
  let last = 0
  return (...args) => {
    const now = Date.now()
    if (now - last > delay) {
      last = now
      fn.apply(this, args)
    }
  }
}
export default throttle
