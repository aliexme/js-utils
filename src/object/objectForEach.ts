export const objectForEach = <T extends Record<string, any>>(
  obj: T,
  callbackFn: (entry: { key: keyof T, value: T[keyof T] }) => void,
): void => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key]
    callbackFn({ key, value })
  })
}
