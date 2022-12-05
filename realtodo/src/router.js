import Vue from 'vue'
import Router from 'vue-router'

import Users from './views/UsersView.vue'
import Login from './views/setting/LoginView.vue'
import SignIn from './views/setting/SigninView.vue'
import TodoScreen from './views/setting/TodoScreen.vue'
import CreateTask from './views/setting/CreateTask.vue'
import DoTask from './views/setting/DoTask.vue'
/* eslint-disable */
// このエリアのソースコードでeslintが無効になる
import {
    addDoc,
    collection,
    getFirestore,
    setDoc,
    getDoc,
    doc,
    getDocs,
    updateDoc,
    onSnapshot,
    query,
   

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";
import { async } from '@firebase/util'



/* eslint-enable */

Vue.use(Router);

const router = new Router({
    routes:[
    {path:'/Users',component:Users},
    {path:'/Login',component:Login,
    name:'Login'},
    {path:'/SignIn',component:SignIn},
    {path:'/TodoScreen',component:TodoScreen,
    name:{requireAuth:true},
    meta:{requireAuth:true}},
    {path:'/Create',component:CreateTask,
    meta:{requireAuth:true}},
    {path:'/',component:DoTask,
    meta:{requireAuth:true}}

],
    

})

router.beforeEach(async(to,from,next) =>{
    const isMeta  =to.matched.some(record => record.meta.requireAuth)
    let isLogin
    const auth =getAuth()
    await onAuthStateChanged(auth,(user) =>{
        
        if(user){
            isLogin = true;
        }else{
            isLogin =false;
            
        }
    });
    if( isMeta && !isLogin){
        next('/Login');
    }
    else{
        next();
    }
})

export default router