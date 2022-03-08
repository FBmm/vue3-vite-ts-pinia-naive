import request from '@/utils/request'

export function login(data: any) {
	return request({
		url: '/api/user/login',
		method: 'post',
		data
	})
}

export function getUserInfo(data: any) {
	return request({
		url: '/api/user/info',
		method: 'post',
		data
	})
}
