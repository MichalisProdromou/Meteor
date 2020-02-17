<template>
<v-row>
  <!-- Avatar and main info -->
  <v-col 
    cols="12" 
    sm="4"
    md="3"
  >
    <v-card class="elevation-3">
      <v-row      
        align="center"
        justify="center"
      >
        <v-col cols="12" class="text-center">
          <v-avatar          
            color="grey"
            size="164"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>

        <v-col cols="12" class="text-center subtitle-2">
          {{ player.name }}
        </v-col>

        <v-col cols="12" class="text-center body-2">
          {{ player.phone }}
        </v-col>
        <v-col cols="12" class="text-center body-2">
          {{ player.email }}
        </v-col>
      </v-row>
       
    </v-card>
  </v-col>

  <!-- Everything else -->
  <v-col 
    cols="12" 
    sm="8"
    md="9"
  >
    <v-card class="elevation-3">
      <v-row>
        <v-col cols="12" sm="6" class="subtitle-2">
          Team
        </v-col>
        <v-col cols="12" sm="6" class="subtitle-2">
          {{player.company.name}}
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</v-row>
  
</template>

<script>
export default {
  name: "ViewPlayer",
  props:["player"],

}
</script>

<style>

</style>