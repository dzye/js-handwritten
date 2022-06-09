export default function compose(...fns): any {
  return fns.reduce(
    (pre, cur) =>
      (...args) =>
        cur(pre(...args))
  )
}
