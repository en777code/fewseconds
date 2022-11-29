<template>
  <v-app>
    <v-container>
      <div v-for="(data,index) in fordata" :key="index.id">
        <p>{{data.title}}</p>
        <p>{{data.ex}}</p>
        <p>{{index}}</p>

       </div>
      
      <v-btn>こんそる</v-btn>
       <h1>{{viewdata}}</h1>
       <div v-for="(data,index) in viewdata" :key="index.id">
        <p>{{data.title}}</p>
        <p>{{data.ex}}</p>
        <p>{{index}}</p>

       </div>
            
  
  </v-container>
  </v-app>
</template>
<script>

3
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
    query,
   

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */

export default{
  computed:{
    viewdata(){
      return this.$store.state.viewData
    },
    fordata(){
      return this.$store.state.forData
    }
  },
    methods: {
      
        consoleData(){
         

        },

      async AddBigTask(){
        console.log(this.BigTask["1d1ANAXPKFq34re2kKPL"])     
},
        async doneTask(index){
          console.log(index)
        },
},

    data: () => ({
        ViewData:null,
       
  }),
    
        
}
</script>