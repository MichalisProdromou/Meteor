<template>
  <v-app>
    <application-drawer/>
    <application-navbar/>

    <v-content>
      <router-view></router-view>
      <!-- <HelloWorld /> -->
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld"
import ApplicationNavbar from "./components/ApplicationNavbar.vue";
import ApplicationDrawer from "./components/ApplicationDrawer.vue";
export default {
  name: "App",

  components: {
    applicationNavbar: ApplicationNavbar,
    applicationDrawer: ApplicationDrawer
    
  },

  data: () => ({
    //
  }),
  created(){
    console.log(this.$route)
  }
};
</script>
