<template>
  <v-row align="stretch">
      <v-col sm="12">
        <!-- The floating action button -->
        <v-btn
          to="/seasons/new"
          fixed
          dark
          fab
          bottom
          right
          color="pink"
          @click.prevent="AddSeason"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>      
    </v-row>
</template>

<script>
export default {
  name: "SeasonsMain",
  methods: {
    AddSeason(){
      console.log("[Add season]")
    }
  }
}
</script>

<style>

</style>