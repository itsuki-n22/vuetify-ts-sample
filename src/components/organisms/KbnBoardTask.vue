<template>
  <v-container>
    <v-row>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="a" :status="0">
          TODO
        </KbnTaskList>
      </v-col>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="b" :status="1">
          WIP
        </KbnTaskList>
      </v-col>
      <v-col class="col-xs-4">
        <KbnTaskList :lists="c" :status="2">
          DONE
        </KbnTaskList>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import KbnTaskList from "@/components/organisms/KbnTaskList.vue"

export default {
  data() {
    return {
    a: {},
    b: {},
    c: {}
  }
  },
  components: {
    KbnTaskList
  },
  mounted(){
    console.log(this.$store.state)
    this.a = this.$store.getters.freshList
    this.b = this.$store.getters.wipList
    this.c = this.$store.getters.doneList
    console.log(this.a)
    console.log(this.b)
  }
}
</script>
<style scoped>
</style>