import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSq0N-OlvjRGN_xGCXV4uSsWY_LMJFdPE",
    authDomain: "realtodo-bf1ff.firebaseapp.com",
    projectId: "realtodo-bf1ff",
    storageBucket: "realtodo-bf1ff.appspot.com",
    messagingSenderId: "676574448653",
    appId: "1:676574448653:web:49a68a10a495b89b5f5944"
  };
initializeApp(firebaseConfig)


// import {
//     addDoc,
//     collection,
//     getFirestore,
//     setDoc,
//     getDoc,
//     doc,
//     getDocs,
//     onSnapshot,

// }from "firebase/firestore"
// import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-disable */
// このエリアのソースコードでeslintが無効になる


const db = getFirestore()
/* eslint-enable */
const auth= getAuth()
export default{
    data:()=>({
        auth:auth,
        db:db,
        BigTask:"",
        MediumTask:"",
        SmallTask:"",
        e6:1,
        active : false, // 実行状態
        start : 0, // startを押した時刻
        timer : 0, // setInterval()の格納用
        interval : 0, // 計測時間
        accum : 0, // 累積時間(stopしたとき用)
    }),      
}