import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../node_modules/materialize-css/dist/js/materialize.js';
import '../node_modules/materialize-css/dist/css/materialize.css';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
