<template>
  <v-container>
    <v-card class="d-flex flex-row">
      <v-card-text @click="toDetail(list.id)">
        {{ list.title }}
      </v-card-text>
      <v-card-actions>
        <v-icon @click="deleteTask(list)">mdi-close</v-icon>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>

export default {
  props: ['list'],

  components: {
  },

  methods: {
    deleteTask(list){
      this.$store.commit('deleteTask',list)
    },
    toDetail(id){
      this.$router.push("/tasks/" + id)
    }
  }
}
//import KbnBoard
</script>
<style scoped>
</style>
