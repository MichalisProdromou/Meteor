<template>
<v-dialog 
  v-model="showPlayerCardDialog" 
  fullscreen 
  hide-overlay 
  transition="dialog-bottom-transition"
>
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>
        {{ player.name }}
      </v-toolbar-title>
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
    
    <v-card-text>
      <view-player 
        v-if="cardReason === 'view'"
        :player="player"
      />
      <edit-player 
        v-if="cardReason === 'edit'"
        :player="player"
      />
    </v-card-text>
  </v-card>
</v-dialog>
  
</template>

<script>
import eventBus from "../../eventBus.js";
import ViewPlayer from "./ViewPlayer.vue";
import EditPlayer from "./EditPlayer.vue";

export default {
  name: "PlayerCard",
  props:["player"],
  components: {
    viewPlayer: ViewPlayer,
    editPlayer: EditPlayer
  },
  data(){
    return {
      cardReason: 'view',
      showPlayerCardDialog: true
    }
  },
  methods: {
    CloseDialog(){
      eventBus.$emit("ClosePlayerCardDialog");
      this.showPlayerCardDialog = false;
    }
  }

}
</script>

<style>

</style>