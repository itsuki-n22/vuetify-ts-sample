<template>
  <div class="login-view mt-5">
    <h2> ログインフォーム </h2>
    <KbnLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

export default {
  name: 'KbnLoginView',
  components: {
    KbnLoginForm
  },

  methods: {
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({path: '/'})
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  }
}

</script>

<style scoped>
.login-view {
  width: 600px;
  margin: 0 auto;
  background: #eee;
  padding: 25px;
}
h2 {
  text-align: center;
}
</style>
