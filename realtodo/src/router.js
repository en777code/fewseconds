import Vue from 'vue'
import Router from 'vue-router'

import Users from './views/UsersView.vue'

Vue.use(Router);

export default new Router({
    routes:[{path:'/Users',component:Users},]
})