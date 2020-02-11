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
      :items="referees"
      :headers="headers"
      :items-per-page="-1"
      :search="search"
      @click:row="RefereeRowClicked"

      >
    </v-data-table>
  </v-col>
</v-row>
  
</template>

<script>
import eventBus from "../../eventBus.js";

export default {
  name: "RefereesListView",
  props: ["referees"],
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
    RefereeRowClicked(referee){
      console.log(referee);
      eventBus.$emit("RefereeSelected", referee);
    },
    
  }

}
</script>

<style>
.clickable tr:hover{
  cursor: pointer;
}

</style>