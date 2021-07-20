import client from './client'

export default {
  fetchList: () => {
    return new Promise((resolve, reject) => {
      client.post('/lists')
        .then((res: any) => resolve({lists: res.data }))
        .catch((err) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
