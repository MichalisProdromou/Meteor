<template>
  <v-row>
    <v-col 
      sm="6"
      md="4"
      lg="4"
      v-for="(referee, index) in referees"
      :key="index"
    >
      <v-card>
        <v-img
          height="200px"
          :src="referee.imgUrl"
        >
        </v-img>
        <v-card-title>{{referee.name}}</v-card-title>
        <v-card-text>
          {{referee.phone}}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RefereesGroupView",
  props: ["referees"],
  data: () => ({
    
  })

}
</script>

<style>

</style>