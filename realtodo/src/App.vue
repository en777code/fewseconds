<template>
  <v-app>
    <HeaderMenu @controlDrawer="controlDrawer"/>
    <SideMenu :drawer="drawer"/>
    <v-main>
      <div class="pa-3">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
   
    
  
</template>

<script>
import HeaderMenu from "./menu/HeaderMenu.vue"
import SideMenu from "./menu/SideMenu.vue"

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
    onSnapshot,

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */




export default{
  mounted(){
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid)
    
    } else {
      // User is signed out
      console.log('signout')
      
    }
});
  },
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
    database:null,
      dataRef:null,
      user:null,
      unsub:null,
  
  })
}

</script>
