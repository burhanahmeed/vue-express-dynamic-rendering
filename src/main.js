import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMeta from 'vue-meta'
 
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
