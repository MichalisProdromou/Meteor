<template>
  <v-container >
    <v-row >
      <router-view 
        :fetchingData="fetchingData"
      ></router-view>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Seasons",
  components: {

  },
  data: () => ({
    fetchingData: false
  }),
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
    }
  },
  mounted(){
    this.FetchSeasons();
    this.$store.commit("SetDisplayModeButtons", true);
  },
  beforeDestroy(){
    this.$store.commit("SetDisplayModeButtons", false);
  }

}
</script>

<style>

</style>