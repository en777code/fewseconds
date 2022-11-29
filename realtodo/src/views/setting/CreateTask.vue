<template>
    <div>
    <h1>新規作成画面</h1>
    <v-btn @click="addTask">新規作成</v-btn>
    <div v-for="(item,index) in testArray" :key='index'>
        <v-text-field v-model='testArray[index].title' />
        <v-text-field v-model='testArray[index].ex' />
        <v-btn @click="console">console</v-btn>
        
    </div>
    <v-btn @click="addArray">add</v-btn>
    </div>
</template>>

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
   

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */
export default{
    data:()=>({
        testArray:[{"title":"unko","ex":"unchi"}]
    }),
    methods:{
    console(){
      console.log(this.testArray)
    },
    addArray(){
        const obj = {"title":"","ex":""}
        this.testArray.push(obj)

        
        
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
    async addTask(){
        const data ={
            title : "task",
            array:this.testArray,

        }
        const auth =getAuth()
        const uid = auth.currentUser.uid
        console.log("uid",uid)
        // const cityRef = doc(this.db, 'cities', 'BJ');
        // setDoc(cityRef,data);
        const userBigTask = collection(this.db,'users', `${uid}`,'bigtask');
        setDoc(doc(userBigTask),data)
        // await setDoc(doc(this.db, "users", `${uid}`,"bigtask"), data);
    }
  },
}
</script>