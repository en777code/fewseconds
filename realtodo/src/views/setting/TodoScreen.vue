<template>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col cols="4" align="center"
              ><v-card outlined tile>大タスク</v-card>
              <v-text-field
              label="大タスクを追加"
              type="text"              
              v-model="BigTask"
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
  
    methods: {
      async AddBigTask(){
        const auth =getAuth()
        const user = auth.currentUser
        const data1 =
    {
      
      title: this.BigTask,
     
    }
        // console.log(user)
        // const data ={
        //   title:this.BigTask
        // }
        // await setDoc(doc(this.db, "users", `${user.uid}`,"BigTask"), data);
        const userBigTask = collection(this.db,'users', `${user.uid}`,'bigtask');
        setDoc(doc(userBigTask),data1)
},
        
}}
</script>