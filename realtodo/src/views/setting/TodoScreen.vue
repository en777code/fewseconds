<template>
  <v-app>
    <v-container>
    <!-- <v-row v-if="viewdata">
      <v-col>
        <h1>{{viewdata.title}}</h1>
      </v-col>
      <v-col>
        <h1>{{viewdata.donecount}}</h1>
      </v-col>

    </v-row> -->
    
    <v-stepper v-model="slide" flat vertical>
    <template v-for="(method, index) in fordata">
      
      <v-stepper-step
        color="#7eba24"
        :complete="slide > index + 1"
        :step="index + 1"
        :key="index"
        @click="slide = index + 1"
      >
      
      </v-stepper-step>

      <v-stepper-content :step="index + 1" :key="method.name">
        <v-card-title>{{method.title}}</v-card-title>
        <v-card elevation="5" class="ma-3 scrollY" >
          <v-col>
            <v-row>
              
              <v-col>
                <v-card-title class="text-justify">
                  {{ method.ex }}
                </v-card-title>
              </v-col>
            </v-row>
          </v-col>
          <v-row class="ma-3 pr-4 pb-5">
            <v-spacer></v-spacer>
            <v-btn
                  v-if="index!==fordata.length-1"
                    color="primary"
                    @click="slide=slide+1"
  
                  >
                    NEXT
                  </v-btn>
                  <v-btn v-if="index==fordata.length-1"
                  color="primary"
                  @click="(slide=slide+1,doneTask(viewdata.donecount))">DONE</v-btn>
          </v-row>
        </v-card>
      </v-stepper-content>
    </template>
  </v-stepper>
     
            
  
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
    updateDoc,
    onSnapshot,
    query,
   

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */

export default{
  created : function(){
    if(this.viewdata==null){
      this.$router.push('/')
    }
  },
  computed:{
    viewdata(){
      return this.$store.state.viewData
    },
    fordata(){
      return this.$store.state.forData
    },
    updatefirebase(){
      return this.$store.state.updateRef
    }
  },
    methods: {
      

        async doneTask(index){
         
          const number = index +1
          const data ={
            donecount:number
          }
          await  updateDoc(this.updatefirebase,data)
          this.$router.push('/')

        },
},

    data: () => ({
        slide:1,
        ViewData:null,
       
  }),

        
}
</script>