import Vue from 'vue'

import VuePhotoSwipe from '../src'

Vue.use(VuePhotoSwipe)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})