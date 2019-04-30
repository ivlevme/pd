import Vue from 'vue'
import App from './App.vue'
import Crop from './Crop.vue';

import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css'

// import MainInfo from './MainInfo'

Vue.use(Croppa);
Vue.component('crop', Crop)
// Vue.component('main-info', MainInfo)

new Vue({
  el: '#app',
  render: h => h(App)
})
