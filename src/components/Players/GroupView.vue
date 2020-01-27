<template>
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

<script>
export default {
  name: "PlayersGroupView",
  props: ["players"],
  data: () => ({
    
  })
}
</script>

<style>

</style>