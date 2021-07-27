<template>
  <v-container>
    <KbnBoardTask />
  </v-container>
</template>
<script>
import KbnBoardTask from '@/components/organisms/KbnBoardTask.vue'
import {mapState} from 'vuex'

export default {
  name: "KbnBoardView",
  components: {
    KbnBoardTask
  },

  mounted(){
    this.$store.dispatch('fetchLists')
  },
}
</script>
<style scoped>
</style>