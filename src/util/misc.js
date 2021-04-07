// 合并对象，类似于Object.assign()
export function extend (a, b) {
  for (const key in b) {
    a[key] = b[key]
  }
  return a
}
