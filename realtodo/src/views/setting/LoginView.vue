<template>
    <v-container>
      <div>
        <v-snackbar v-model="snackbar.flag" :timeout="snackbar.timeout" light top right outlined :color="snackbar.color">
          {{snackbar.msg}}
        </v-snackbar>
      </div>
      <v-row justify="center">
        <!--        justifyでボックスをセンターに-->
        <v-col cols="1" class="my-15"/>
        <!--        columnはデフォではcols=1でrowのなかに横に12当分で並ぶ colsで何割を使うか設定できる
                    mdはミディアムディスプレイ(ノートなど 960~1264px)のcolで、xsはスマホ lgはラージ(1264~1904px)-->
        <v-col lg="5" md="5" xs="1" class="white rounded-xl my-15">
          <h2>LogIn</h2><br><br>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" prepend-icon="mdi-account-circle" label="Email"/>
              <v-text-field
                  v-model="pass"
                  label="Password"
                  prepend-icon="mdi-lock"
                  :type="showLogPassword ? 'text' : 'password'"
                  :append-icon="showLogPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showLogPassword = !showLogPassword"
              />
              <!-- :typeでボックスタイプをtrue/falseで表示切り替え
                    :append-iconでアイコンも変わる
                    @click:appendでアイコンクリックでイベント発生-->
  
                <v-col cols="12" lg="6" md="6" class="my-15">
                  <v-btn @click.stop="logIn"  class="info" dark text outlined height="50px"
                         width="150px">LogIn
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn text color="blue" link to='/SignIn'>For account holders</v-btn>
                </v-col>
              
            </v-form>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
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

}from "firebase/firestore"
import {getAuth,onAuthStateChanged} from "firebase/auth";



/* eslint-enable */
  import {signInWithEmailAndPassword} from "firebase/auth";
  
  export default {
    mounted(){
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.$router.push('/TodoScreen').catch()
        } 
});
  },
    
    
    methods: {
      // 変数初期化
      reset() {
        this.email = ""
        this.pass = ""
      },
      // ログイン関連
      logIn() {
        
        signInWithEmailAndPassword(this.auth, this.email, this.pass)
        .then(()=>{
         
        })
        .catch(()=>{
          this.snackbar ={
          flag:true,
          color:"red",
          msg:"ログインに失敗しました",
          timeout:2000,
    }

        })
       
        
      
        
        
      },

    },
    data: () => ({
      email: "",
      pass: "",
      showLogPassword: false,
      path:"signup",
      snackbar:false,
      flag:false,
      valid:false,
      color:"",
      msg:"",
      timeout:2000,
      sppOnSnapshot: null
    }),
  
  
  }
  </script>