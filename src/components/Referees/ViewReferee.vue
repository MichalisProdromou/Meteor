<template>
  <v-row>
    <!-- Avatar and main info -->
    <v-col cols="12" >
      <v-card class="elevation-3">
        <v-row>
          <v-col cols="12" sm="4" md="3" class="text-center">
            <v-avatar          
              color="grey"
              size="164"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            <div class="text-center title">{{ referee.name }}</div>
          </v-col>
          <v-divider
            inset
            vertical
          ></v-divider>
          <v-col cols="12" sm="7" md="8">
            <!-- Basic info row -->
            <v-row>
              <v-col cols="12">
                <div class="body-2 font-weight-light font-weight-thin">Basic Info</div>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-row>
                  <v-col cols="12" sm="4" class="py-0">
                    <div class="body-2 font-weight-light">
                      Phone number: 
                      <strong class="ml-1">{{ referee.phone }}</strong>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="4" class="py-0">
                    <div class="body-2 font-weight-light">
                     Date of birth: 
                    <strong class="ml-1">21/11/2018</strong>
                    </div>
                  </v-col>                  
                </v-row>
                
              </v-col>
              <v-col cols="12" class="px-0">
                <v-divider/>
              </v-col>
            </v-row>

            <!-- Address info row -->
            <v-row>
              <v-col cols="12">
                <div class="body-2 font-weight-light font-weight-thin">Basic Info</div>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-row>
                  <v-col cols="12" sm="4" class="py-0">
                    <div class="body-2 font-weight-light">
                      Phone number: 
                      <strong class="ml-1">{{ referee.phone }}</strong>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="4" class="py-0">
                    <div class="body-2 font-weight-light">
                     Date of birth: 
                    <strong class="ml-1">21/11/2018</strong>
                    </div>
                  </v-col>                  
                </v-row>
                
              </v-col>
              <v-col cols="12" class="px-0">
                <v-divider/>
              </v-col>
            </v-row>
          </v-col>

        </v-row>
        
      </v-card>
    </v-col>

    <!-- Tabs with user activity and analytics -->
    <v-col cols="12">
      <v-tabs
        v-model="selectedTab"
        background-color="white"
        color="primary"
      >
        <v-tab>Activity</v-tab>
        <v-tab>Analytics</v-tab>

        <v-tabs-items 
          class="pt-3"
          v-model="selectedTab"
        >
          <v-tab-item>
            <referee-activity :referee="referee" />
            
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>Analytics</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>


      </v-tabs>
    </v-col>

    <!-- Everything else -->
    <!-- <v-col 
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
            {{referee.company.name}}
          </v-col>
        </v-row>
      </v-card>
    </v-col> -->
  </v-row>
</template>

<script>
import RefereeActivity from "./RefereeActivity.vue";

export default {
  name: "ViewReferee",
  props:["referee"],
  components: {
    refereeActivity: RefereeActivity
  },
  data(){
    return {
      selectedTab: null
    }
  }
}
</script>

<style>

</style>