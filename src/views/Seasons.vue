<template>
  <v-container fluid fill-height>
    <v-row align="stretch">
      <router-view></router-view>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Seasons",
  components: {

  },
  data: () => ({

  }),
  methods: {
    AddSeason(){
      console.log("[Add season]")
    }
  }

}
</script>

<style>

</style>