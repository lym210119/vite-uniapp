export function promisify<T>(callback: (options: any) => void): (options: any) => Promise<T> {
  return function (options: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      callback({
        ...options,
        success: (res: T) => {
          resolve(res)
        },
        fail: (err: any) => {
          reject(err)
        },
      })
    })
  }
}
