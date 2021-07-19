<template>
  <div>
    <KbnBoardView />
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="600px"
      >
        <v-card class="py-3">
          <v-card-title>
            <div class="text-h5">タスク詳細</div>
            <v-spacer></v-spacer>
            <v-icon @click="dialog = !dialog">mdi-window-close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="タスク名"
                    required
                    v-model="list.title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    name="説明"
                    label="説明"
                    v-model="list.description"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mr-5">
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="dialog = !dialog"
            >
              保存
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import KbnBoardView from '@/components/templates/KbnBoardView.vue'

export default {
  name: "KbnTaskDetailModal",
  data() {
    return {
      dialog: true,
      list: {}
    }
  },
  components: {
    KbnBoardView 
  },
  mounted() {
     this.list = this.$store.getters.selectList(1)
  },
  watch: {
    dialog: function(){
      this.$router.push("/")
    },
  }
}
</script>
<style scoped>
</style>