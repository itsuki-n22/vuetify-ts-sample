import store from '../store'

export const authorizeToken = (to: any, from: any, next: any) => {
  if (to.matched.some( (record: any) => record.meta.requiresAuth)) {
    if (!store.state.auth || !store.state.auth.token) {
      next({path: '/login'})
    } else {
      next()
    }
  } else {
    next()
  }
}
