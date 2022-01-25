import Vue from "vue";
import App from "./App.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  data: {
    
  },
}).$mount("#app");
