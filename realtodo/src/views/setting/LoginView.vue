<template>
    <v-container>
      <v-row justify="center">
        <!--        justifyでボックスをセンターに-->
        <v-col cols="1" class="my-15"/>
        <!--        columnはデフォではcols=1でrowのなかに横に12当分で並ぶ colsで何割を使うか設定できる
                    mdはミディアムディスプレイ(ノートなど 960~1264px)のcolで、xsはスマホ lgはラージ(1264~1904px)-->
        <v-col lg="5" md="5" xs="1" class="white rounded-xl my-15">
          <h2>ログイン</h2><br><br>
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
  
              <v-row justify="center">
                <v-col cols="12" lg="6" md="6" class="my-15">
                  <v-btn @click.stop="logIn"  class="info" dark text outlined height="50px"
                         width="150px">ログイン
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn text color="blue" link to='/SignIn'>アカウントをお持ちの方</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
  
  export default {
    mounted(){
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid)
    
    } else {
      // User is signed out
      console.log('signout')
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
        
      },
    },
    data: () => ({
      email: "",
      pass: "",
      showLogPassword: false,
      
  
      path: "signup",
  
      snackbar: {
        flag: false,
        color: "",
        msg: "",
        timeout: 2000
      },
      sppOnSnapshot: null
    }),
  
  
  }
  </script>