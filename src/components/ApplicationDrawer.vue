<template>
  <v-navigation-drawer
    v-if="LoggedInUser.loggedIn"
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
      <v-divider/>
      <v-list-item @click.prevent="LogOut">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-title>
          {{ $t("navigation.logout") }}
        </v-list-item-title>
      </v-list-item>
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

    <v-btn icon>
      <v-icon
        v-if="$vuetify.theme.dark"
        @click.prevent="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        mdi-brightness-4
      </v-icon>
      <v-icon
        v-else
        @click.prevent="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        mdi-brightness-7
      </v-icon>
      <!-- <v-checkbox
        v-model="$vuetify.theme.dark"
        hide-details
        on-icon="mdi-brightness-4"
        off-icon="mdi-brightness-7 "        
      ></v-checkbox> -->
    </v-btn>

    

    <!-- <v-switch
      v-model="$vuetify.theme.dark"
      hide-details
      inset
      label="Theme Dark"
    ></v-switch> -->
    </v-card-actions>
  </v-card>
    
    
    
  </v-navigation-drawer>
  
</template>

<script>
import eventBus from "../eventBus.js";
import { mapGetters } from 'vuex';
import firebase from "firebase";

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
    },
    LogOut(){
      firebase
        .auth()
        .signOut()
        .then((e) => {
          console.log("Log out", e);
          this.$router.replace({
            name: "Login"
          });
        });
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