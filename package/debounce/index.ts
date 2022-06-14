// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = function (fn, delay): any {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
export default debounce
