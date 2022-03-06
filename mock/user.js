import Mock from 'mockjs'

Mock.mock('/api/user/login', {
    code: 0,
    data: {
        token: 'user-token',
    }
})

Mock.mock('/api/user/info', {
    code: 0,
    data: {
        id: '1',
        name: '武乾乾',
    }
})