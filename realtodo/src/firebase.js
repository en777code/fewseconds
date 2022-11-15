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
    }),
        
}