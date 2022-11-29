<template>
    <v-app>
        <h1>タスク選択画面</h1>
        <p>{{count}}</p>
        
        <div v-for="(title,index) in this.ViewTask" :key="index.id">
            <h1 @click="setTask(index)">{{title.title}}</h1>
            
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
        }
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
        console(index){
            console.log(index)
            

        },
        async setTask(index){
            const auth =getAuth()
            const uid = auth.currentUser.uid
            const taskid = index
            const docRef =doc(this.db,'users',uid,'bigtask',taskid)
            const docSnap =await getDoc(docRef)
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                this.$store.state.viewData = docSnap.data()
                this.$store.state.forData = docSnap.data().array

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
          }
            this.$router.push('/TodoScreen')
            
        },

    }
}
</script>