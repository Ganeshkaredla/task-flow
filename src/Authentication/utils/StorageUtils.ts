import Cookie from 'js-cookie'

export const ACCESS_TOKEN = 'ZIN59IabAewDM9p9xsM'

export function getCookie(key: string) {
   return Cookie.get(key)
}

export function setCookie(key: string, value: string, expiryInDays = 30) {
   Cookie.set(key, value, {
      expires: expiryInDays,
      path: '/',
      secure: true
   })
}

export function getAccessToken() {
   return getCookie(ACCESS_TOKEN)
}

export function setAccessToken(accessToken: string, expiryInDays = 30) {
   setCookie(ACCESS_TOKEN, accessToken, expiryInDays)
}

export function clearUserSession() {
   Cookie.remove(ACCESS_TOKEN, { path: '/' })
}
