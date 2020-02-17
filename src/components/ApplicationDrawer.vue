<template>
  <v-navigation-drawer
    v-if="LoggedInUser != null"
    app
    v-model="showAppDrawer"
  >
    <v-card 
      height="100%">
    <v-list>
      <template v-for="(nav, index) in navItems">
      <v-list-group
        v-if="nav.sublinks"
        :key="index"
      >
      
      </v-list-group>

      <v-list-item
        v-else
        :key="index"
        :to="nav.route"
      >
        <v-list-item-action>
          <v-icon>{{ nav.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-title>
          {{ nav.title }}
        </v-list-item-title>
      </v-list-item>
    </template>
    </v-list>
    <v-divider/>
    <!-- <v-spacer/> -->
    <v-card-actions>
      
      <v-btn
      @click="SetLocale('en')"
    >
      En
    </v-btn>
    <v-btn
      @click="SetLocale('gr')"
    >
      Gr
    </v-btn>
    </v-card-actions>
    </v-card>
    
    
    
  </v-navigation-drawer>
  
</template>

<script>
import eventBus from "../eventBus.js";
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    showAppDrawer: true,
    navItems: []
  }),
  computed: {
    ...mapGetters([
      'UserRolesNavigation',
      'LoggedInUser'
    ])

  },
  methods: {
    ToggleAppDrawer(e) {
      this.showAppDrawer = !this.showAppDrawer;
    },
    SetLocale(locale){
      this.$i18n.locale = locale;
      eventBus.$emit("LocaleChanged");
    },
    UpdateNavTranslation(){
      const nav = this.UserRolesNavigation(this);  
      this.navItems = nav["Admin"];
    }
  },
  created() {
    eventBus.$on("ToggleAppDrawer", this.ToggleAppDrawer);
    eventBus.$on("LocaleChanged", this.UpdateNavTranslation);
  },
  mounted() {
    this.UpdateNavTranslation();
  }
}
</script>

<style>

</style>