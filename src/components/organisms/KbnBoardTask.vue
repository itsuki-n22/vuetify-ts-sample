<template>
  <v-container>
    <v-row>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="this.$store.getters.freshList" :status="0">
          TODO
        </KbnTaskList>
      </v-col>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="this.$store.getters.wipList" :status="1">
          WIP
        </KbnTaskList>
      </v-col>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="this.$store.getters.doneList" :status="2">
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
  }
}
</script>
<style scoped>
</style>