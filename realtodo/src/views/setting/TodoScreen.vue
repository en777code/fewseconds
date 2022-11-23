<template>
  <v-app>
    <v-container>
    
            <v-stepper v-for="(title,index) in this.BigTask" 
            :key ="index.id"
            color="#rgba(255,0,0)"
            >{{index}}
              <h1>{{title.title}}</h1> 
              <v-stepper v-for="(mini,ind) in title.tasks" :key="(ind)"
                v-model="e6"
                vertical
                >
                
                  <v-stepper-step
                  
                  :complete ="e6>ind+1"
                  :step=ind+1
                  >
                  
                  <h2>{{mini}}</h2>
                 
                  </v-stepper-step>
                <v-stepper-content :step =ind+1
                >
                
                  <v-card
                  color="teal accent-3"
                  class="mb-12">
                  <div>
                    <h2>経過時間</h2>
                    <h1>{{time}}</h1>
                    <!-- 小数2桁まで表示 -->
                    <!-- <v-btn @click="startTimer()" v-show="!active">Start</v-btn>
                    <v-btn @click="stopTimer()" v-show="active">Stop</v-btn> -->
                    <!-- <v-btn @click="resetTimer()">Reset</v-btn> -->
                  </div>
               
                  </v-card>
                <v-btn
                v-if="ind!==title.tasks.length-1"
                  color="primary"
                  @click="e6 = e6 +1,resetTimer()"

                >
                  Finish
                </v-btn>
                <v-btn v-if="ind==title.tasks.length-1"
                color="primary"
                @click="e6 = e6 +1,doneTask(index),startTimer(),resetTimer()">Done</v-btn>
                
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
},  created(){
  this.startTimer()
},
    computed:{
      time(){
        return +Math.floor(this.interval%3600/60) +":"+this.interval.toFixed(0)%3600%60
      }
        
    },
  
    methods: {
      startTimer(){
            this.active = true;
            this.start = Date.now();
            this.timer = setInterval(()=>{ this.interval = this.accum + (Date.now() - this.start) * 0.001;}, 10); // 10msごとに現在時刻とstartを押した時刻の差を足す
         },
        stopTimer(){
            this.active = false;
            this.accum = this.interval;
            clearInterval(this.timer);
        },
        resetTimer(){
            this.interval = 0;
            this.accum = 0;
            this.start = Date.now();
        },
      async AddBigTask(){
        console.log(this.BigTask["1d1ANAXPKFq34re2kKPL"])     
},
        async doneTask(index){
          console.log(index)
        },
},

    data: () => ({
        BigTask:"",
        SmallTask:"",
        Ref:null,
        usersCollectionRef:null,

        

       
  }),
    
        
}
</script>