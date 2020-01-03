<template>
  <v-row>
    <v-col 
      sm="6"
      md="4"
      lg="4"
      v-for="(season, index) in seasons"
      :key="index"
    >
      <v-card>
        <!-- <v-img
          height="200px"
          :src="season.imgUrl"
        >
        </v-img> -->
        <v-card-title>{{season.name}}</v-card-title>
        <v-card-text>
          {{season.phone}}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SeasonsGroup",
  props: ["seasons"],
  

}
</script>

<style>

</style>