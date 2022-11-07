import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomeView.vue'
import Users from './views/UsersView.vue'

Vue.use(Router);

export default new Router({
    routes:[{path:'/',component:Home},{path:'/Users',component:Users},]
})