<template>
  <v-dialog 
    v-model="showNewPlayerDialog" 
    fullscreen 
    hide-overlay 
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Add player</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn 
            dark 
            text
            @click="CloseDialog"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
        
      </v-toolbar>
      <!-- <v-card-title>
        <h1 class="text-center headline ma-auto">Create new player</h1>
      </v-card-title> -->
      <v-card-subtitle>
        <h2 class="text-center subtitle-1">Please fill in the required information</h2>
      </v-card-subtitle>
      <v-card-text>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import eventBus from "../../eventBus.js";
export default {
  name: "NewPlayerDialog",
  data: () => ({
    showNewPlayerDialog: true
  }),
  methods: {
    CloseDialog(){
      eventBus.$emit("CloseNewPlayerDialog");
      this.showNewPlayerDialog = false;
    }
  }

}
</script>

<style>

</style>