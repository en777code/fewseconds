import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
