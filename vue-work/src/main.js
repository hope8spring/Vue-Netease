import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import CopeTitle from './components/CopeTitle/CopeTitle';
import "@/mock"
import './validate'

Vue.config.productionTip = false;
Vue.component("CopeTitle",CopeTitle);
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
