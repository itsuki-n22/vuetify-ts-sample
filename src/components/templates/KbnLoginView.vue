<template>
  <v-container>
    <v-card elevation="2">
      <div class="login-view mt-5">
        <h2><v-icon>{{ this.accountIcon }}</v-icon> ログインフォーム </h2>
        <KbnLoginForm :onlogin="handleLogin" />
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mdiAccount } from '@mdi/js'
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

export default {
  name: 'KbnLoginView',

  data: () => ({
    accountIcon: mdiAccount
  }),

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
  margin: 0 auto;
  padding: 25px;
}
h2 {
  text-align: center;
}
</style>
