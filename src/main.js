import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import store from "./store/store";
import vuetify from './vuetify-setup';
import i18n from "./i18n-setup.js";

import * as firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyAfkLXTnt1sY-VINxpSNEoKQvNVLwBKles",
  authDomain: "meteor-e0387.firebaseapp.com",
  databaseURL: "https://meteor-e0387.firebaseio.com",
  projectId: "meteor-e0387",
  storageBucket: "meteor-e0387.appspot.com",
  messagingSenderId: "1032638381576",
  appId: "1:1032638381576:web:9dcb40313c0d40ea2a1bbd",
  measurementId: "G-1KCLRYVFXH"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("SetUser", user);
});

Vue.use(firebase);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
