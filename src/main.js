import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from 'vue-meta';
import axios from 'axios';

import './assets/css/main.css'
import './assets/css/fontawesome_5_10_2.css'

window.axios = axios.create({
  baseURL: 'http://localhost:8000/api'
})

Vue.config.productionTip = false;
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
