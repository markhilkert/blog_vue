import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import axios from "axios";
import DOMPurify from "dompurify";

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
