<template>
  <v-container>
    <h2> ボードページ </h2>
    <KbnBoardTask />
  </v-container>
</template>
<script>
import KbnBoardTask from '@/components/organisms/KbnBoardTask.vue'

export default {
  name: "KbnBoardView",
  components: {
    KbnBoardTask
  }

}
</script>
<style scoped>
</style>