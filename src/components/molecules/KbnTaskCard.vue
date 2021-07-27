<template>
  <v-container>
    <v-card class="d-flex flex-row ma-2" elevation="1">
      <v-card-text @click="toDetail(list.id)">
        {{ list.title }}
      </v-card-text>
      <v-card-actions>
        <v-icon @click="deleteList(list)">mdi-close</v-icon>
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
    deleteList(list){
      this.$store.dispatch('deleteList',list)
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
