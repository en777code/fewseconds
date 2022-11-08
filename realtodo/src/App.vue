<template>
  <v-app>
    <HeaderMenu @controlDrawer="controlDrawer"/>
    <SideMenu :drawer="drawer"/>
    <v-main>
      <div class="pa-3">
        <router-view></router-view>
      </div>
      <button>@</button>
    </v-main>
  </v-app>
   
    
  
</template>

<script>
import HeaderMenu from "./menu/HeaderMenu.vue"
import SideMenu from "./menu/SideMenu.vue"
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const app =initializeApp({
  apiKey: process.env.VUE_APP_apiKey,
  authDomain:process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId:process.env.VUE_APP_meddagingSenderId,
  appId:process.env.VUE_APP_appId,
});

const auth = getAuth(app)


export default{
  methods:{
    controlDrawer(flag){
      this.drawer = flag
    }
  },
  components:{
    HeaderMenu:HeaderMenu,
    SideMenu:SideMenu,
  },
  data:()=>({
    drawer:false,
    auth:auth,
  })
}

</script>
