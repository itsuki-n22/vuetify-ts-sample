import client from './client'

export default {
  login: (authInfo: any) => {
    return new Promise((resolve, reject) => {
      client.post('/api/v1/auth/login', authInfo)
        .then((res: any) => {
          return resolve({userId: res.data.userId})
        })
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  logout: (authInfo: any) => {
    return new Promise((resolve, reject) => {
      client.post('/api/v1/auth/logout', authInfo)
        .then((res: any) => resolve({message: res.data.message}))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
