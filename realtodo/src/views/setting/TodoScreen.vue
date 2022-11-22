<template>
  <v-app>
    <v-container class="grey lighten-5">
    
            <v-stepper v-for="(title,index) in this.BigTask" :key ="index.id">
              <h3>{{title.title}}</h3> 
              <v-stepper v-for="(mini,ind) in title.tasks" :key="(ind)"
                v-model="e6"
                vertical>
                
                  <v-stepper-step
                  :complete ="e6>ind+1"
                  :step=ind+1
                  >
                  {{mini}}
                  <small>あいうえお</small>
                  {{ind}}
                  </v-stepper-step>
                <v-stepper-content :step =ind+1>
                  <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn
                  color="primary"
                  @click="e6 = e6 +1"
                >
                  Continue
                </v-btn>
                </v-stepper-content>
                </v-stepper>
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
    onSnapshot,
    query,
   

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */

export default{
  mounted(){
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
        const uid = user.uid;
        this.usersCollectionRef = collection(this.db, 'users', `${uid}`, 'bigtask');
        const obj = {}
        const q =query(this.usersCollectionRef)
        onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
        obj[doc.id] = doc.data()
    });
        this.BigTask = obj
        
});

//         onSnapshot(doc(this.db, "users", `${uid}`), (doc) => {
//         const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
//         console.log(source, " data: ", doc.data());
        
// });
      
    
    } else {
      // User is signed out
      console.log('signout')
    }
});
},
  
    methods: {
      async AddBigTask(){
        console.log(this.BigTask["1d1ANAXPKFq34re2kKPL"])
    //     const auth =getAuth()
    //     const user = auth.currentUser
    //     const data1 =
    // {
    //   title: this.BigTask,
    // }
    //     console.log(user)
    //     const data ={
    //       title:this.BigTask
    //     }
    //     await setDoc(doc(this.db, "users", `${user.uid}`,"BigTask"), data);
    //     const userBigTask = collection(this.db,'users', `${user.uid}`,'bigtask');
    //     setDoc(doc(userBigTask),data1)
},

    data: () => ({
        BigTask:"",
        SmallTask:"",
        Ref:null,
        usersCollectionRef:null,
       
  }),
    
        
}}
</script>