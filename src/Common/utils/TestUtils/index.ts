export function resolveWithTimeout<T>(response): any {
   return setTimeout(() => response, 2000)
}

export function waitForMilliseconds(milliSeconds: number) {
   return new Promise(resolve => {
      setTimeout(() => resolve(), milliSeconds)
   })
}
