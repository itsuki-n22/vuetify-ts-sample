<template>
  <v-container>
    <v-row>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="this.$store.getters.freshList">
          TODO
        </KbnTaskList>
      </v-col>
      <v-col class="col-xs-4">
        <KbnTaskList>
          WIP
        </KbnTaskList>
      </v-col>
      <v-col class="col-xs-4">
        <KbnTaskList>
          DONE
        </KbnTaskList>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import KbnTaskList from "@/components/organisms/KbnTaskList.vue"

export default {
  computed: {
    freshList() { return this.$store.state.freshList},
    wipList() { return this.$store.state.wipList},
    doneList() { return this.$store.state.doneList},
  },
  methods: {
  },
  components: {
    KbnTaskList
  }
}
//import KbnBoard
</script>
<style scoped>
</style>