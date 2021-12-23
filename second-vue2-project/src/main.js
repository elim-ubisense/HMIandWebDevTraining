//import Vue from 'vue'
const Vue = window.Vue
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
