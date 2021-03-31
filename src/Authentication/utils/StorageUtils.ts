import Cookie from 'js-cookie'

export const ACCESS_TOKEN = 'ZIN59IabAewDM9p9xsM'
export const USER_NAME = 'user_name'
export const PROFILE_IMAGE = 'profile_pic'

export function getCookie(key: string): string | null | undefined {
   return Cookie.get(key)
}

export function setCookie(key: string, value: string, expiryInDays = 30): void {
   Cookie.set(key, value, {
      expires: expiryInDays,
      path: '/',
      secure: true
   })
}

export function getAccessToken(): string | null | undefined {
   return getCookie(ACCESS_TOKEN)
}

export function setAccessToken(accessToken: string, expiryInDays = 30): void {
   setCookie(ACCESS_TOKEN, accessToken, expiryInDays)
}

export function setUserName(name: string): void {
   localStorage.setItem(USER_NAME, name)
}

export function getUserName(): string | null | undefined {
   return localStorage.getItem(USER_NAME)
}

export function setProfileImage(profilePicUrl: string): void {
   localStorage.setItem(PROFILE_IMAGE, profilePicUrl)
}

export function getProfileImageUrl(): string | null | undefined {
   return localStorage.getItem(PROFILE_IMAGE)
}

export function clearUserSession(): void {
   Cookie.remove(ACCESS_TOKEN, { path: '/' })
   localStorage.clear()
}
