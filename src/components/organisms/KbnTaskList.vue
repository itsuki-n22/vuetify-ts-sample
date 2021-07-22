<template>
  <v-container>
    <v-card elevation="0" outlined>
      <KbnTaskListHeader @click="toggleTaskForm">
        <slot />
      </KbnTaskListHeader>

      <Draggable :options="{group: 'ITEMS'}" :class="groupType">
        <KbnTaskCard v-for="list in lists" :key="list.id" :list="list"  />
      </Draggable>
      <KbnTaskForm v-if="taskFormFlag" @toggle="toggleTaskForm" :status="status" />
    </v-card>
  </v-container>
</template>
<script>
import KbnTaskListHeader from "@/components/molecules/KbnTaskListHeader.vue"
import KbnTaskCard from "@/components/molecles/KbnTaskCard.vue"
import KbnTaskForm from "@/components/molecles/KbnTaskForm.vue"
import Draggable from 'vuedraggable'

export default {
  props: ['lists', 'status'],

  data(){
    return { 
      taskFormFlag: false,
    }
  },

  computed: {
    groupType(){
      return "group" + this.status
    }
  },

  components: {
    KbnTaskListHeader,
    KbnTaskCard,
    KbnTaskForm,
    Draggable
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
