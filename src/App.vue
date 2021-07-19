<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Kanban App</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="this.$store.state.auth.token"
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

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
  
  methods: {
    logout(){
      return this.$store.dispatch('logout', this.$store.state.auth)
        .then(() => {
          this.$router.push({path: '/login'})
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err: any) { return Promise.reject(err) }
  }
});
</script>
