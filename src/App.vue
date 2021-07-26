<template>
  <v-app>
    <v-app-bar app color="" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>vuex練習</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="this.$store.state.auth.userId"
        @click="logout"
        text
      >
        <span>ログアウト</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import client from './api/client'
import {mapState} from 'vuex'

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
  
  methods: {
    logout(){
      return this.$store.dispatch('logout', {auth: {id: this.$store.state.auth.userId}})
        .then(() => {
          this.$router.push({path: '/login'})
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err: any) { return Promise.reject(err) }
  },

  mounted(){
    client.get('/api/v1/auth/get_csrf_token')
      .then((res: any) => {
        client.defaults.headers.common['X-CSRF-Token'] = res.headers['x-csrf-token']
      })
  }

});
</script>
