<template>
    <v-app>
        <v-container>
    <div>
        <v-snackbar v-model="snackbar.flag" :timeout="snackbar.timeout" light top right outlined :color="snackbar.color">
          {{snackbar.msg}}
        </v-snackbar>
    
    <v-card-title>CREATE TASK</v-card-title>
    <v-btn  color="info" @click="addTask">CREATE</v-btn>
    <v-text-field v-model="title" label="TASK_NAME"></v-text-field>
    <div v-for="(item,index) in testArray" :key='index'>
        <p>{{("STEP"+(index+1))}}</p>
        <v-text-field v-model='testArray[index].title' label="STEP_TITLE" />
        <v-text-field v-model='testArray[index].ex' label="EXPLAIN"/>
        
       
        
    </div>
    <v-btn color="info" @click="addArray">ADD ATEP</v-btn>
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
    getDocs,
    onSnapshot,
    query,
   

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */
export default{
    data:()=>({
        testArray:[{"title":"","ex":""}],
        title:"",
        snackbar:false,
        flag:false,
        valid:false,
        color:"",
        msg:"",
        timeout:2000,
    }),
    methods:{
   
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
    taskvalidation(){
        if(this.title == ""){
            return true
        }
        for(const  i of this.testArray){
            if(i.title ==""){
                return true
                
            }
        }
    },
    async addTask(){
        if(this.taskvalidation()){
            this.snackbar ={
                flag:true,
                color:"red",
                msg:"タイトル、項目名を埋めてください",
                timeout:2000,
                }
            console.log("STOP")
            return
        }
      

        const data ={
            donecount:0,
            title : this.title,
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
        this.goSelect()
    },
    goSelect(){
        this.$router.push('/')
    }
  },
}
</script>