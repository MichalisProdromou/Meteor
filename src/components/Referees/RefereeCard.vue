<template>
  <v-dialog
    v-model="showRefereeCardDialog"
    fullscreen 
    hide-overlay 
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>
          {{ referee.name }}
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
        <view-referee 
          v-if="cardReason === 'view'"
          :referee="referee"
        />
        <edit-referee 
          v-if="cardReason === 'edit'"
          :referee="referee"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import eventBus from "../../eventBus.js";
import ViewReferee from "./ViewReferee.vue";
import EditReferee from "./EditReferee.vue";

export default {
  name: "RefereeCard",
  props: ["referee"],
  components: {
    viewReferee: ViewReferee,
    editReferee: EditReferee
  },
  data(){
    return {
      cardReason: 'view',
      showRefereeCardDialog: true
    }
  },
   methods: {
    CloseDialog(){
      eventBus.$emit("CloseRefereeCardDialog");
    }
  }

}
</script>

<style>

</style>