import { defineStore } from 'pinia'
import { setToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user.api'

interface BaseUserInfo {
  id: string
  name: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {} as BaseUserInfo,
    token: '' as string,
  }),
  getters: {
    userName: (state) => state.userInfo.name,
  },
  actions: {
    async login(loginInfo: { username: string; password: string }) {
      const { data } = await login(loginInfo)
      this.token = data.token
      setToken(this.token)
      return data
    },
    async getUserInfo() {
      const { data } = await getUserInfo({ token: this.token })
      this.userInfo = data || {}
      return data
    },
  },
})
