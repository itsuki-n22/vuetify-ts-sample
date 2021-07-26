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
  }
}
