<template>
  <v-container>
    <v-card>
      <KbnTaskListHeader @click="toggleTaskForm">
        <slot />
      </KbnTaskListHeader>

      <KbnTaskCard v-for="list in lists" :key="list.id" :list="list" />
      <KbnTaskForm v-if="taskFormFlag" @toggle="toggleTaskForm" />

    </v-card>
  </v-container>
</template>
<script>
import KbnTaskListHeader from "@/components/molecules/KbnTaskListHeader.vue"
import KbnTaskCard from "@/components/molecules/KbnTaskCard.vue"
import KbnTaskForm from "@/components/molecules/KbnTaskForm.vue"

export default {
  props: ['lists'],

  data(){
    return { 
      taskFormFlag: false,
    }
  },

  components: {
    KbnTaskListHeader,
    KbnTaskCard,
    KbnTaskForm
  },

  methods: {
    toggleTaskForm(){
      this.taskFormFlag = !this.taskFormFlag
    }
  }
}
//import KbnBoard
</script>
<style scoped>
</style>
