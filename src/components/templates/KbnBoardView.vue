<template>
  <v-container>
    <KbnBoardTask />
  </v-container>
</template>
<script>
import KbnBoardTask from '@/components/organisms/KbnBoardTask.vue'

export default {
  name: "KbnBoardView",
  components: {
    KbnBoardTask
  },

  mounted(){
    this.$store.dispatch('fetchLists', {params: {list: {user_id: 1}}})
  }

}
</script>
<style scoped>
</style>