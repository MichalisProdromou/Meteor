<template>
  <v-container fluid>
    <v-row>
      <v-col sm="12">
        <template>          
          <v-fade-transition group hide-on-leave>
            <v-skeleton-loader
              :key="1"
              class="mx-auto"
              type="table-tbody"
              v-show="FetchingPlayers"
              >
            </v-skeleton-loader>
            <div
              :key="2"
              class="mx-auto"              
              v-show="!FetchingPlayers"
            >
              <v-fade-transition group hide-on-leave>
                <list-view 
                    v-show="DisplayModeSelection === 0"
                    :key="1"
                    :players="computedPlayers">
                  </list-view>
                  <group-view
                    v-show="DisplayModeSelection === 1"
                    :key="2"
                    :players="computedPlayers"
                  ></group-view>
              </v-fade-transition>
            </div>
          </v-fade-transition>
        </template>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn        
          fixed
          dark
          fab
          bottom
          right
          color="primary"
          @click.prevent="AddPlayer"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>   
    </v-row>

    <new-player
      v-if="showNewPlayerDialog"
    >
    </new-player>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';
import eventBus from "../eventBus.js";
import ListView from "../components/Players/ListView.vue";
import GroupView from "../components/Players/GroupView.vue";
import NewPlayer from "../components/Players/NewPlayer.vue";
export default {
  name: "Players",
  components: {
    listView: ListView,
    groupView: GroupView,
    newPlayer: NewPlayer
  },
  data: () => ({
    players: [],
    showNewPlayerDialog: false
  }),
  computed: {
    ...mapGetters([
      'DisplayModeSelection',
      'FetchingPlayers',
      'AllPlayers'
    ]),
    computedPlayers(){
      let players = this.AllPlayers.map(player => {
        player.imgUrl = "https://picsum.photos/200";
        return player;
      });
      return players;
    }
  },
  methods: {
    async FetchPlayers(){
      const VM = this;
      try{
        VM.$store.commit("SetPlayersFDS", true);
        const res = await this.$store.dispatch("FetchPlayers");
        console.log("[Component - FetchSeasons]", res);
        //TODO: Dispatch an action that will instantiate players objects and commit them to the store
        VM.$store.commit("SetPlayers", res);
        VM.$store.commit("SetPlayersFDS", false);
      }
      catch(err) {
        console.log(err);
        VM.$store.commit("SetPlayersFDS", false);
      }
    },
    AddPlayer(){
      console.log("AddPlayer");
      this.showNewPlayerDialog = true;
    },
    CloseNewPlayerDialog(){
      this.showNewPlayerDialog = false;
    }
  },
  created(){
    eventBus.$on("CloseNewPlayerDialog", this.CloseNewPlayerDialog);
  },
  mounted(){
    this.FetchPlayers();
    this.$store.commit("SetDisplayModeButtons", true);
  },
  beforeDestroy(){
    this.$store.commit("SetDisplayModeButtons", false);
    eventBus.$off("CloseNewPlayerDialog", this.CloseNewPlayerDialog);
  }

}
</script>

<style>

</style>