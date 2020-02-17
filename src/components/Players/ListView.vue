<template>
  <v-row>
    <v-col sm="12">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-col>
    <v-col sm="12">
      <v-data-table
      class="elevation-3 clickable"
        :key="1"
        :items="players"
        :headers="headers"
        :items-per-page="-1"
        :search="search"
        @click:row="PlayerRowClicked"
      >
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import eventBus from "../../eventBus.js";
export default {
  name: "PlayersListView",
  props: ["players"],
  data: () => ({
    search: "",
    headers: [
      {
        text: 'Full name',
        align: 'left',
        value: 'name',
      },
      {
        text: 'Phone no.',
        align: 'left',
        value: 'phone',
      },
      {
        text: 'Email',
        align: 'left',
        value: 'email',
      },
    ]

  }),
  methods: {
    PlayerRowClicked(player){
      //console.log(player);
      eventBus.$emit("PlayerSelected", player);
    },
    
  }

}
</script>

<style>

</style>