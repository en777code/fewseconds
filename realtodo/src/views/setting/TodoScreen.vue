<template>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col cols="4" align="center"
              ><v-card outlined tile>大タスク</v-card>
              <v-text-field
              
              label="大タスクを追加"
              type="text"              
              >
            <template v-slot:append-outer>
                <v-btn text color="blue" @click="AddBigTask()">追加</v-btn>
            </template>
            </v-text-field>
              </v-col
            >
            
            <v-col cols="4" align="center"
              ><v-card outlined tile>中タスク</v-card>
              <v-text-field
              
              label="中タスクを追加"
              type="text"              
              >
            <template v-slot:append-outer>
                <v-btn text color="blue">追加</v-btn>
            </template>
            </v-text-field>
            </v-col
            >

            
            <v-col cols="4" align="center"
              ><v-card outlined tile>小タスク</v-card>
              <v-text-field
           
              label="小タスクを追加"
              type="text"   
              >
            <template v-slot:append-outer>
                <v-btn text color="blue">追加</v-btn>
            </template>
            </v-text-field></v-col>
    </v-row>
  </v-container>
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
  

}from "firebase/firestore"
import {onAuthStateChanged} from "firebase/auth";
import { ZERO } from "long";


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
  
    methods: {
      async AddBigTask(){
        const db = getFirestore()
        const data ={
          name:"zero"
        }
        await setDoc(doc(db, "cities", "new-city-id"), data);
        
    
      
},
    data:()=>({
    }),
        
}}
</script>