//import Vue from 'vue'
const Vue = window.Vue
import App from './App.vue'

Vue.config.productionTip = false

if (window.addEventListener) {
  // Mozilla, Netscape, Firefox
  window.addEventListener("load", WindowLoad, false);
  } else if (window.attachEvent) {
  // IE
  window.attachEvent("onload", WindowLoad);
  }
  
function WindowLoad(){
  new Vue({
    render: h => h(App),
  }).$mount('#app');
}

