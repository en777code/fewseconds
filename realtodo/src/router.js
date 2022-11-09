import Vue from 'vue'
import Router from 'vue-router'

import Users from './views/UsersView.vue'
import Login from './views/setting/LoginView.vue'
Vue.use(Router);

export default new Router({
    routes:[{path:'/Users',component:Users},{path:'/Login',component:Login}]
})