import Vue from 'vue'
import App from './App.vue'
// import Crop from './Crop.vue';

import VueTheMask from 'vue-the-mask'
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css'


Vue.use(VueTheMask)
Vue.use(Croppa);
// Vue.component('crop', Crop)

new Vue({
  el: '#app',
  render: h => h(App)
})
