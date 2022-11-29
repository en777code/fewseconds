import Vue from 'vue'
import Router from 'vue-router'

import Users from './views/UsersView.vue'
import Login from './views/setting/LoginView.vue'
import SignIn from './views/setting/SigninView.vue'
import TodoScreen from './views/setting/TodoScreen.vue'
import CreateTask from './views/setting/CreateTask.vue'
import DoTask from './views/setting/DoTask.vue'

Vue.use(Router);

export default new Router({
    routes:[
    {path:'/Users',component:Users},
    {path:'/Login',component:Login},
    {path:'/SignIn',component:SignIn},
    {path:'/TodoScreen',component:TodoScreen},
    {path:'/Create',component:CreateTask},
    {path:'/DoTask',component:DoTask}

],
    

})