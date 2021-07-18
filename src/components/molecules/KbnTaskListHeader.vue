<template>
  <v-toolbar dense flat color="#eee">
    <v-toolbar-title>
      <slot />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-icon @click="handleClick">mdi-plus</v-icon>

  </v-toolbar>
</template>
<script>
//import KbnBoard
export default {
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style scoped>
</style>
