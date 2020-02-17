<template>
  <v-row >
    <v-col cols="12" sm="12">
      <template>          
        <v-fade-transition group hide-on-leave>
          <v-skeleton-loader
            :key="1"
            class="mx-auto"
            type="table-tbody"
            v-show="fetchingData"
            >
          </v-skeleton-loader>
          <div
            :key="2"
            class="mx-auto"            
            v-show="!fetchingData"
          >
            <v-fade-transition group hide-on-leave>
              <seasons-list
                v-show="DisplayModeSelection === 0"
                :key="1"
                :seasons="AllSeasons">
              </seasons-list>
              
              <seasons-group
                v-show="DisplayModeSelection === 1"
                :key="2"
                :seasons="AllSeasons"
              ></seasons-group>
            </v-fade-transition>
          </div>
        </v-fade-transition>
      </template>
      
    </v-col>  
    <v-col cols="12" sm="12">
      <!-- The floating action button -->
      <v-btn
        to="/seasons/new"
        fixed
        dark
        fab
        bottom
        right
        color="primary"
        @click.prevent="AddSeason"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>      
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import SeasonsList from "./SeasonsList.vue";
import SeasonsGroup from "./SeasonsGroup.vue";
export default {
  name: "SeasonsMain",
  props:["fetchingData"],
  components: {
    seasonsList: SeasonsList,
    seasonsGroup: SeasonsGroup
  },
  data: () => ({
    
  }),
  computed: {
    ...mapGetters([
      'DisplayModeSelection',
      'AllSeasons'
    ]),
  },
  methods: {
    AddSeason(){
      console.log("[Add season]")
    }
  }
}
</script>

<style>

</style>