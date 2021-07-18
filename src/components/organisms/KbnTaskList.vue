<template>
  <v-container>
    <v-card>
      <KbnTaskListHeader @click="openTaskForm">
        <slot />
      </KbnTaskListHeader>

      <KbnTaskCard v-for="list in lists" :key="list.id" :list="list">
      </KbnTaskCard>
    </v-card>
  </v-container>
</template>
<script>
import KbnTaskListHeader from "@/components/molecules/KbnTaskListHeader.vue"
import KbnTaskCard from "@/components/molecules/KbnTaskCard.vue"

export default {
  props: ['lists'],

  components: {
    KbnTaskListHeader,
    KbnTaskCard
  },

  methods: {
    openTaskForm(){
      return false
    }
  }
}
//import KbnBoard
</script>
<style scoped>
</style>
