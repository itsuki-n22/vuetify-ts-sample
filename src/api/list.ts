import client from './client'

export default {
  fetchLists: (info: any) => {
    return new Promise((resolve, reject) => {
      client.get('/api/v1/lists', info)
        .then((res: any) => resolve({lists: res.data }))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  addList: (info: any) => {
    return new Promise((resolve, reject) => {
      client.post('/api/v1/lists', info)
        .then((res: any) => resolve(res.data))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  updateList: (info: any) => {
    return new Promise((resolve, reject) => {
      client.patch('/api/v1/lists/' + info.id, info)
        .then((res: any) => resolve(res.data))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  deleteList: (info: any) => {
    return new Promise((resolve, reject) => {
      client.delete('/api/v1/lists/' + info.id)
        .then((res: any) => resolve(res.data))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
