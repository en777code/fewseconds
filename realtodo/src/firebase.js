import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {
    getFirestore,
    
}from "firebase/firestore"

const app =initializeApp({
    apiKey: process.env.VUE_APP_apiKey,
    authDomain:process.env.VUE_APP_authDomain,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId:process.env.VUE_APP_meddagingSenderId,
    appId:process.env.VUE_APP_appId,
    })

const auth = getAuth(app)

export default{
    data:()=>({
        auth:auth,
        db:getFirestore(),
    })
}