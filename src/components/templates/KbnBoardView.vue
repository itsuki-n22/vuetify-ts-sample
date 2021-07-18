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
  }

}
</script>
<style scoped>
</style>