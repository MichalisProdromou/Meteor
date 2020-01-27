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
              v-show="fetchingData"
              >
            </v-skeleton-loader>
            <div
              :key="2"
              class="mx-auto"              
              v-show="!fetchingData"
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
    </v-row>
    

  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';
import ListView from "../components/Referees/ListView.vue";
import GroupView from "../components/Referees/GroupView.vue";
import eventBus from '../eventBus';

export default {
  name: "Referees",
  components: {
    listView: ListView,
    groupView: GroupView
  },
  data: () => ({
    fetchingData: false,
    referees: []
  }),
  computed: {
    ...mapGetters([
      'DisplayModeSelection'
    ]),
    compReferees(){
      let referees = this.referees.map(referee => {
        referee.imgUrl = "https://picsum.photos/200";
        return referee;
      });
      return referees;
    }
  },
  methods: {
    async GetReferees(){
      const VM = this;
      VM.fetchingData = true;
      await axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          console.log(res);
          VM.referees = res.data;
        })
        .catch(err => {
          console.log(err);
        })
        VM.fetchingData = false;
    }
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