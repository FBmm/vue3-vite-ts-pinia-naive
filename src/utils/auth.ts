import Cookie from 'js-cookie'

const TokenKey = 'token'

export function setToken(token: string) {
  Cookie.set(TokenKey, token)
}

export function removeToken() {
  Cookie.remove(TokenKey)
}
