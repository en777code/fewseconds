import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
