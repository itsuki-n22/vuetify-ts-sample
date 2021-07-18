<template>
  <v-container>
    <v-row>
      <v-col class="col-4">
        <KbnTaskList :lists="this.$store.getters.freshList">
          TODO
        </KbnTaskList>
      </v-col>
      <v-col class="col-4">
        <KbnTaskList>
          WIP
        </KbnTaskList>
      </v-col>
      <v-col class="col-4">
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
  data: () => ({
    lists: []
  }),
  created: function(){
    var lists = this.$store.state.board.contents
    this.lists = lists
    //console.log(this.wipList)
    console.log(this.$store.getters.freshList)
  },
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