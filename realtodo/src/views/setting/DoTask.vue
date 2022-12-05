<template>
    <v-app>
        <v-container>
       
        <v-row>
            <v-col cols="10"> <v-card-title>SELECT TASK</v-card-title></v-col>
            <v-col cols="2"><v-btn color="info" @click="goCreate()" >CREATE</v-btn></v-col>
        </v-row>
        
       
        <v-spacer></v-spacer>
        
        <div v-for="(doc,index) in this.ViewTask" :key="index.id">
            <v-row>
                <v-col cols="8">
                    <v-row>
                        <v-col cols="1"><v-card-title color="grey lighten-3">{{doc.donecount}}</v-card-title></v-col>
                        <v-col cols="7"><v-card-title>{{doc.title}}</v-card-title></v-col>
                    </v-row> 
                    
                    
                </v-col>
                <v-col cols="4">
                    <v-row >
                        <v-col ><v-btn color="green" @click="setTask(index)">START</v-btn></v-col>
                        <v-col><v-btn color="red" @click="deleteTask(index)">DELETE</v-btn></v-col>
                    </v-row>
                </v-col>
                
            </v-row>
           
           
            
        </div>
    </v-container>
    </v-app>
    
</template>

<script>
/* eslint-disable */
// このエリアのソースコードでeslintが無効になる
import {
    addDoc,
    collection,
    getFirestore,
    setDoc,
    getDoc,
    doc,
    deleteDoc,
    getDocs,
    onSnapshot,
    query,
QuerySnapshot,
   

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */
export default{
    computed:{
        count(){
            return this.$store.state.viewIndex
        },

    },
    mounted(){
        onAuthStateChanged(this.auth,(user)=>{
            if (user) {
                const uid = user.uid;
                this.usersCollectionRef = collection(this.db, 'users', `${uid}`, 'bigtask');
                const obj = {}
                const q =query(this.usersCollectionRef)
                onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                obj[doc.id] = doc.data()
            });
            this.ViewTask = obj
    });
            } else {
            // User is signed out
            console.log('signout')
            }
});
           
            
            
        
       

    },
    data:()=>({
        ViewTask:null,
        
    }),

    methods:{
        
        async deleteTask(index){
            const auth =getAuth()
            const uid = auth.currentUser.uid
            const taskid = index
            const docRef =doc(this.db,'users',uid,'bigtask',taskid)
            await deleteDoc(docRef)
            this.$router.go({path: this.$router.currentRoute.path, force: true})


        },
        async setTask(index){
            const auth =getAuth()
            const uid = auth.currentUser.uid
            const taskid = index
            const docRef =doc(this.db,'users',uid,'bigtask',taskid)
            const docSnap =await getDoc(docRef)
            if (docSnap.exists()) {
                this.$store.state.viewData = docSnap.data()
                this.$store.state.forData = docSnap.data().array
                this.$store.state.updateRef = docRef

            } 
            this.$router.push('/TodoScreen')
            
        },
        goCreate(){
            this.$router.push('/Create')
        },

    }
}
</script>