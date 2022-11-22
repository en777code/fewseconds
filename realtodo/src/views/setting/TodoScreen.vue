<template>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
              <!-- <v-col cols="4" align="center">
                <v-card outlined tile>大タスク</v-card>
                <v-text-field
                label="大タスクを追加"
                type="text"              
                v-model="BigTask"
                >
              <template v-slot:append-outer>
                  <v-btn text color="blue" @click="AddBigTask()">追加</v-btn>

              </template>
              
              </v-text-field>

                <template>
                  <div>
                    
                  </div>
                </template>
              </v-col>
            
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
            </v-text-field></v-col> -->
            <v-row>
              <v-btn @click="AddBigTask">OBJ</v-btn>
              
            </v-row>
            <v-row>
              <div>
             
                <v-card v-for="(task,key) in this.BigTask" :key="key">
                  <v-col>
                    {{key}}
                  </v-col>
                  <v-col>
                    {{task.title}}
                  </v-col>
                  <v-col>
                    {{task.tasks}}
                  </v-col>
                  <li v-for="(mini,num) in task.tasks" :key ="mini" >
                    {{mini}}
                    {{num}}
                  </li>
                  
                </v-card>
              
            </div>
            </v-row>
           
     
        
            
          
            
  
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
        console.log(this.usersCollectionRef)
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