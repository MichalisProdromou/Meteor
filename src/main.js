import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n-setup.js";

Vue.config.productionTip = false;

// Vue.use(Vuetify, {
//   theme: {
//     primary: "#3da9fc",
//     secondary: "",
//     accent: "",
//     error: "#ef4565",
//     info: "",
//     success: "",
//     warning: "#ef4565"
//   }
// })

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
