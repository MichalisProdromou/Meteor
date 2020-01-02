<template>
  <v-container fluid>
    <v-row>
      <v-col sm="12">
        <v-btn-toggle
          v-model="displayAsSelection"
          mandatory
        >
          <v-btn>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-view-grid-outline</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <template v-if="displayAsSelection === 0">
      <v-col sm="12">
        <v-data-table
        :items="computedPlayers"
        :headers="headers"
        :items-per-page="-1">
        </v-data-table>
      </v-col>
    </template>

    <template v-else>
      <v-row>
        <v-col 
          sm="6"
          md="4"
          lg="4"
          v-for="(player, index) in players"
          :key="index"
        >
          <v-card>
            <v-img
              height="200px"
              :src="player.imgUrl"
            >
            </v-img>
            <v-card-title>{{player.name}}</v-card-title>
            <v-card-text>
              {{player.name}}
            </v-card-text>
          </v-card>
        </v-col>
        
        
      </v-row>
    </template>
    

  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Players",
  components: {},
  data: () => ({
    displayAsSelection: 0,
    players: [],
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
  computed: {
    computedPlayers(){
      let players = this.players.map(player => {
        player.imgUrl = "https://picsum.photos/200";
        return player;
      });
      return players;
    }
  },
  methods: {
    GetPlayers(){
      const VM = this;
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          console.log(res);
          VM.players = res.data;
        })
    }
  },
  mounted(){
    this.GetPlayers();
  }

}
</script>

<style>

</style>