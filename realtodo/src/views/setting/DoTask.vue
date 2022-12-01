<template>
    <v-app>
        <v-btn @click="goCreate()">新規作成</v-btn>
        <h1>タスク選択画面</h1>
        <p>{{count}}</p>
        
        <div v-for="(doc,index) in this.ViewTask" :key="index.id">
            <v-row>
                <v-col> <h1 @click="setTask(index)">{{doc.title}}</h1></v-col>
                <v-col><v-btn @click="deleteTask(index)">削除</v-btn></v-col>
            </v-row>
           
            <p>{{doc.donecount}}</p>
            
        </div>

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

            } else {
               
                console.log("No such document!");
          }
            this.$router.push('/TodoScreen')
            
        },
        goCreate(){
            this.$router.push('/Create')
        },

    }
}
</script>