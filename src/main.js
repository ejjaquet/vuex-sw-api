import Vue from "vue";
import VueDayjs from "vue-dayjs-plugin";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueDayjs);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
