<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12">
        <v-skeleton-loader
          v-if="FetchingSeasons"
          class="mx-auto"
          type="table-tbody"
        >
        </v-skeleton-loader>
        <div
          v-else
          class="mx-auto"  
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
      </v-col>

      <!-- Add new referee buton-->
      <v-col cols="12" sm="12">
        <v-btn        
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

    <new-season v-if="showNewSeasonDialog"/>


    <!-- <v-row >
      <router-view 
        :fetchingData="fetchingData"
      ></router-view>
    </v-row> -->

  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import eventBus from '../eventBus.js';

import SeasonsList  from "../components/Seasons/SeasonsList.vue";
import SeasonsGroup from "../components/Seasons/SeasonsGroup.vue";
import NewSeason    from "../components/Seasons/NewSeason.vue";

export default {
  name: "Seasons",
  components: {
    seasonsList:  SeasonsList,
    seasonsGroup: SeasonsGroup,
    newSeason:    NewSeason
  },
  data: () => ({
    fetchingData: false,
    selectedSeason: null,
    showSeasonCard: false,
    showNewSeasonDialog: false
  }),
  computed: {
    ...mapGetters([
      'DisplayModeSelection',
      'FetchingSeasons',
      'AllSeasons'
    ]),
  },
  methods: {
    async FetchSeasons(){
      const VM = this;
      try{
        VM.fetchingData = true;
        const res = await VM.$store.dispatch("FetchSeasons");
        console.log("[Component - FetchSeasons]", res);
        //TODO: Dispatch an action that will instantiate season objects and commit them to the store
        VM.$store.commit("SetSeasons", res);
      }
      catch(err) {
        console.log(err);
      }

      VM.fetchingData = false;
    },
    AddSeason(){
      console.log("[Add season]");
      this.showNewSeasonDialog = true;      
    },
    CloseNewSeasonDialog(){
      this.showNewSeasonDialog = false;  
    },
    OpenSeasonCard(){
      this.showSeasonCard = true;
    },
    CloseSeasonCard(){
      this.showSeasonCard = false;
    }
  },
  created() {
    eventBus.$on("CloseNewSeasonDialog", this.CloseNewSeasonDialog);
    eventBus.$on("CloseSeasonCard", this.CloseSeasonCard);
  },
  mounted(){
    this.FetchSeasons();
    this.$store.commit("SetDisplayModeButtons", true);
  },
  beforeDestroy(){
    this.$store.commit("SetDisplayModeButtons", false);
    eventBus.$off("CloseNewSeasonDialog", this.CloseNewSeasonDialog)
    eventBus.$off("CloseSeasonCard", this.CloseSeasonCard);
  }

}
</script>

<style>

</style>