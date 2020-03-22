<template>
  <v-app-bar
    v-if="LoggedInUser.loggedIn" 
    app 
    flat
    color="secondary"
    >
    <v-app-bar-nav-icon @click="ToggleAppDrawer($event)"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ breadcrumbParent }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      
      <!-- <template v-if="ShowDisplayModeButtons">
        <v-btn-toggle
          v-model="displayModeSelection"
          mandatory
        >
          <v-btn>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-view-grid-outline</v-icon>
          </v-btn>
        </v-btn-toggle>
      </template> -->
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import eventBus from "../eventBus.js";
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    // showAppBar: true,
    breadcrumbParent: "",
    breadcrumbChild: "",
    displayModeSelection: 0,
  }),
  computed: {
    ...mapGetters([
      'UserRolesNavigation',
      'ShowDisplayModeButtons',
      'LoggedInUser'
    ]),
    routeFullPath(){
      return this.$route.fullPath;
    }
  },
  watch: {
    routeFullPath: function(newValue, oldValue) {
      this.BuildBreadcrumb();
    },
    displayModeSelection: function(newValue, oldValue) {
      this.$store.commit("SetDisplayModeSelection", newValue);
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    ToggleAppDrawer() {
      eventBus.$emit("ToggleAppDrawer");
    },
    BuildBreadcrumb() {
      const VM = this;
      const nav = this.UserRolesNavigation(VM); 
      let toMatch = VM.$route.path;
      
      Object.entries(nav).forEach( ([key, value]) => {
        // Loop through the root links
        value.forEach( rootLink => {
          if (toMatch === rootLink.route) {
            VM.breadcrumbParent = rootLink.title;
            VM.breadcrumbChild = "";
            return;
          }
        })        
      });

    }
  },
  created(){    
    eventBus.$on("LocaleChanged", this.BuildBreadcrumb);
  },
  mounted(){
    this.BuildBreadcrumb();
  }

}
</script>

<style>

</style>