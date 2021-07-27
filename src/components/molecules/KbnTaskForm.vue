<template>
  <v-container>
    <v-card elevation="1">
      <v-card-text>
        <v-form
          ref="hoge"
          lazy-validation
        >
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>

          <v-btn
            :disabled="!titleValid"
            color="primary"
            class="mr-4"
            @click="createList"
          >
            追加
          </v-btn>

          <v-btn
            color="default"
            class="mr-4"
            @click="closeForm"
          >
            キャンセル
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>

export default {
  props: ['status'],

  data(){
    return {
      title: "",
      titleRules: [
        v => !!v || '入力してください'
      ]
    }
  },

  methods: {
    createList(){
      this.$store.dispatch('addList', {id: null, title: this.title, description: "", status: this.status, user_id: 1})
      this.$refs.hoge.reset()
    },
    closeForm(event){
      this.$emit('toggle', event)
    },
  },

  computed: {
    titleValid: function () {
      if (this.title && this.title.length > 0 ){
        return true
      } else {
        return false
      }
    }
  }
}
//import KbnBoard
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.25em 0;
}
ul li {
  font-size: 0.5em;
}
.validation-errors{
  height: 32px;
  color: red;
}
</style>
