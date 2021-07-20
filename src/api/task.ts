import client from './client'

export default {
  addTask: (authInfo: any) => {
    return new Promise((resolve, reject) => {
      client.post('/auth/login', authInfo)
        .then((res: any) => resolve({token: res.data.token, userId: res.data.userId}))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  updateTask: (authInfo: any) => {
    return new Promise((resolve, reject) => {
      client.post('/auth/logout', authInfo)
        .then((res: any) => resolve({message: res.data.message}))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  removeTask: (authInfo: any) => {
    return new Promise((resolve, reject) => {
      client.post('/auth/logout', authInfo)
        .then((res: any) => resolve({message: res.data.message}))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
