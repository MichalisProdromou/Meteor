<template>
  <v-row>
    <v-col 
      sm="6"
      md="4"
      lg="4"
      v-for="(referee, index) in referees"
      :key="index"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
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

            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="primary"
              >
                <v-btn @click="RefereeClicked(referee)">See more info</v-btn>
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
  name: "RefereesGroupView",
  props: ["referees"],
  data: () => ({
    
  }),
  methods: {
    RefereeClicked(referee){
      console.log(referee);
      eventBus.$emit("RefereeSelected", referee);
    }
  }

}
</script>

<style>

</style>