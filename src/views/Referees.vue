<template>
  <v-container fluid >
    <v-row>
      <v-col sm="12">
        <template>          
          <v-fade-transition group hide-on-leave>
            <v-skeleton-loader
              :key="1"
              class="mx-auto"
              type="table-tbody"
              v-show="FetchingReferees"
              >
            </v-skeleton-loader>
            <div
              :key="2"
              class="mx-auto"              
              v-show="!FetchingReferees"
            >
              <v-fade-transition group hide-on-leave>
                <list-view 
                  v-show="DisplayModeSelection === 0"
                  :key="1"
                  :referees="compReferees">
                </list-view>
                <group-view
                  v-show="DisplayModeSelection === 1"
                  :key="2"
                  :referees="compReferees"
                ></group-view>
              </v-fade-transition>
            </div>
          </v-fade-transition>
        </template>        
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
          @click.prevent="AddReferee"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>     
    </v-row>
    <new-referee v-if="showNewRefereeDialog" />

    <referee-card
      v-if="showRefereeCard"
      :referee="selectedReferee"
    >
    </referee-card>
    

  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';
import eventBus from '../eventBus';

import ListView    from "../components/Referees/ListView.vue";
import GroupView   from "../components/Referees/GroupView.vue";
import RefereeCard from "../components/Referees/RefereeCard.vue";
import NewReferee  from "../components/Referees/NewReferee.vue";


export default {
  name: "Referees",
  components: {
    listView: ListView,
    groupView: GroupView,
    refereeCard: RefereeCard,
    newReferee: NewReferee
  },
  data: () => ({
    showNewRefereeDialog: false,
    selectedReferee: null,
    showRefereeCard: false
  }),
  computed: {
    ...mapGetters([
      'DisplayModeSelection',
      'FetchingReferees',
      'AllReferees'
    ]),
    compReferees(){
      let referees = this.AllReferees.map(referee => {
        referee.imgUrl = "https://picsum.photos/200";
        return referee;
      });
      return referees;
    }
  },
  methods: {
    async GetReferees(){
      const VM = this;
      try{
        VM.$store.commit("SetRefereesFDS", true);
        const res = await this.$store.dispatch("FetchReferees");
        console.log("[Component - FetchReferees]", res);
        //TODO: Dispatch an action that will instantiate players objects and commit them to the store
        VM.$store.commit("SetReferees", res);
        VM.$store.commit("SetRefereesFDS", false);
      }
      catch(err) {
        console.log(err);
        VM.$store.commit("SetRefereesFDS", false);
      }
    },
    AddReferee(){
      console.log("AddReferee");
      this.showNewRefereeDialog = true;
    },
    OpenRefereerCard(){
      this.showRefereeCard = true;
    },
    CloseRefereeCardDialog(){
      this.showRefereeCard = false;
    }
  },
  created() {
    eventBus.$on("CloseNewRefereeDialog", this.CloseNewRefereeDialog);

    eventBus.$on("CloseRefereeCardDialog", this.CloseRefereeCardDialog);

    eventBus.$on("RefereeSelected", referee => {
      this.selectedReferee = referee;
      this.OpenRefereerCard();
    });
  },
  mounted(){
    this.GetReferees();
    this.$store.commit("SetDisplayModeButtons", true);
  },
  beforeDestroy(){
    this.$store.commit("SetDisplayModeButtons", false);
  }

}
</script>

<style>

</style>