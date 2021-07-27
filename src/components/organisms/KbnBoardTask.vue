<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <KbnTaskList :lists="freshList" status="todo">
          TODO
        </KbnTaskList>
      </v-col>
      <v-col cols="12" sm="4">
        <KbnTaskList :lists="wipList" status="wip">
          WIP
        </KbnTaskList>
      </v-col>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="doneList" status="done">
          DONE
        </KbnTaskList>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import KbnTaskList from "@/components/organisms/KbnTaskList.vue"

export default {
  components: {
    KbnTaskList
  },
  computed: {
    freshList(){ 
      return this.$store.getters.freshList 
      },
    wipList(){ return this.$store.getters.wipList },
    doneList(){ return this.$store.getters.doneList },
  }
}
</script>
<style scoped>
</style>