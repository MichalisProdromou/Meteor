<template>
  <v-dialog
    v-model="showNewRefereeDialog" 
    :fullscreen="$vuetify.breakpoint.smAndDown" 
    hide-overlay 
    transition="dialog-bottom-transition"  
    persistent
  >
    <v-card tile>
      <v-toolbar dark flat>
        <v-toolbar-title>New Referee</v-toolbar-title>
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
        <v-tabs
          v-model="activeTab"
          background-color="primary"
          dark
          grow
        >
          <v-tab key="About">
            About
          </v-tab>
          <v-tab key="Address">
            Address
          </v-tab>
          <v-tab key="RoleInfo">
            Role
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="activeTab">
          <v-tab-item key="About">
            <about/>
          </v-tab-item>
          <v-tab-item key="Address">
            <address-info/>
          </v-tab-item>
          <v-tab-item key="RoleInfo">
            <role-info/>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          @click.prevent="SaveNewReferee"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import eventBus from "../../../eventBus.js";
import firebase from "firebase";

import About from "./About.vue";
import AddressInfo from "./Address.vue";
import RoleInfo from "./RoleInfo.vue";

export default {
  name: "NewReferee",
  components: {
    about: About,
    addressInfo: AddressInfo,
    roleInfo: RoleInfo
  },
  data: () => ({
    showNewRefereeDialog: true,
    newRef: {
      firstName: "",
      lastName: "",
      address: ""
    },
    activeTab: 0,


    startDate: new Date().toISOString().substr(0, 10),
    endDate: new Date().toISOString().substr(0, 10),
    startDatePicker: false,
    endDatePicker: false,
    rules: {
      name: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      description: [
        v => (v.length <= 250) || 'Description must be less than 50 characters',
      ]
    }

  }),
  methods: {
    CloseDialog(){
      eventBus.$emit("CloseNewRefereeDialog");
      this.showNewRefereeDialog = false;
    },
    SaveNewReferee(){
      let db = firebase.firestore();

      db.collection("referees").add({
          firstName: this.newRef.firstName,
          lastName: this.newRef.lastName,
          address: this.newRef.address
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id, docRef);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }
  }

}
</script>

<style>

</style>