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
  
  })
}

</script>
