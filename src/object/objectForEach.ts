export const objectForEach = <T extends Record<string, unknown>>(
  obj: T,
  callbackFn: (entry: { key: keyof T, value: T[keyof T] }) => void,
): void => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key] as T[keyof T]
    callbackFn({ key, value })
  })
}
