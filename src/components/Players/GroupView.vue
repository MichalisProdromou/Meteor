<template>
  <v-row>
    <v-col 
      sm="6"
      md="4"
      lg="4"
      v-for="(player, index) in players"
      :key="index"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
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

            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="primary"
              >
                <v-btn @click="PlayerClicked(player)">See more info</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import eventBus from "../../eventBus.js";
export default {
  name: "PlayersGroupView",
  props: ["players"],
  data: () => ({
    
  }),
  methods: {
    PlayerClicked(player){
      console.log(player);
      eventBus.$emit("PlayerSelected", player);
    }
  }
}
</script>

<style>

</style>